import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { BaseMessage, AIMessage } from "@langchain/core/messages";

// Define the state
const StateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
  }),
});

/*
const cvContext = `
You are the AI assistant for Nassim Mahmoudi.
Nassim is a Full Stack Software Engineer based in Erfurt, Germany.

Skills:
- Frontend: React 19, Vue.js, Angular, TypeScript, Next.js, Tailwind CSS.
- Backend: Node.js, Spring Boot, Java, PHP, PostgreSQL, MongoDB.
- Cloud/DevOps: AWS, Azure, Docker, CI/CD, Jenkins.

Experience:
- Quasiris Search Cloud (2023-Present): Senior Full Stack Developer.
- TELEMATIK (2021-2023): Software Developer.
- TELEMATIK (Intern): Junior Developer.

Contact Info:
- Email: nassimmahmoudi38@gmail.com
- Phone: +49 179 2241555
- Location: Erfurt, Germany

Persona: 
- Professional, technical, but friendly. 
- You speak as Nassim's "Digital Twin". Use "I" when talking about Nassim's work.
- If asked for contact info, provide the email and phone number.
- Always try to be helpful and highlight Nassim's expertise in React and Software Engineering.
`;
*/
// Simple node to simulate or call a model
const callModel = async (state: typeof StateAnnotation.State) => {
  const lastMessage = state.messages[state.messages.length - 1];
  
  // Real implementation would use ChatOpenAI here.
  // For now, if no API key is found, we'll provide a high-quality simulated response.
  if (!process.env.OPENAI_API_KEY) {
    const input = lastMessage.content.toString().toLowerCase();
    let response = "I'm sorry, I couldn't process that. Try asking about my skills or contact info!";
    
    if (input.includes("skill") || input.includes("tech")) {
      response = "I specialize in modern web technologies, specifically React 19, Next.js, and TypeScript. I also have deep experience with backend systems like Spring Boot and Node.js.";
    } else if (input.includes("contact") || input.includes("reach") || input.includes("email")) {
      response = "You can reach me at nassimmahmoudi38@gmail.com or via phone at +49 179 2241555.";
    } else if (input.includes("project") || input.includes("work")) {
      response = "I've worked on some exciting projects, including high-performance search cloud solutions at Quasiris and enterprise apps at TELEMATIK. Check out the timeline on the page for more details!";
    } else if (input.includes("hello") || input.includes("hi")) {
      response = "Hi there! I'm Nassim's AI assistant. How can I help you learn more about my work today?";
    }

    return { messages: [new AIMessage(response)] };
  }

  // If we had OpenAI integrated:
  /*
  const chat = new ChatOpenAI({ modelName: "gpt-4-turbo" });
  const result = await chat.invoke([
    new SystemMessage(cvContext),
    ...state.messages
  ]);
  return { messages: [result] };
  */
  
  return { messages: [new AIMessage("AI Logic Triggered (Key Found)")] };
};

const workflow = new StateGraph(StateAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addEdge("agent", END);

export const app = workflow.compile();
