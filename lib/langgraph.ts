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
    let response = "I'm sorry, I'm still learning about that part of Nassim's life. Try asking about 'skills', 'experience', 'projects', or 'contact'!";
    
    if (input.includes("skill") || input.includes("tech")) {
      response = "Nassim is highly proficient in modern web development. His core stack includes React 19, Next.js, and TypeScript. He's also skilled in backend technologies like Node.js, Spring Boot, and Java, with expertise in both SQL (PostgreSQL) and NoSQL (MongoDB) databases.";
    } else if (input.includes("contact") || input.includes("reach") || input.includes("email") || input.includes("phone")) {
      response = "You can reach Nassim at nassimmahmoudi38@gmail.com. He's also available on LinkedIn for professional networking, or you can check his phone: +49 179 2241555.";
    } else if (input.includes("experience") || input.includes("work") || input.includes("job")) {
      response = "Currently, Nassim is a seniority-level Full Stack Developer at Quasiris Search Cloud in Erfurt, leading frontend efforts. Previously, he spent 2 years at TELEMATIK building enterprise-grade Angular and Spring Boot applications.";
    } else if (input.includes("project")) {
      response = "Nassim has worked on diverse projects: from real-time search cloud platforms and data migration tools to mobile apps using Apache Cordova. He loves solving complex architectural challenges!";
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      response = "Hello! I'm Nassim's Digital Twin. I can tell you about his technical expertise, his professional journey, or how to get in touch with him. What would you like to know?";
    } else if (input.includes("location") || input.includes("where")) {
      response = "Nassim is based in the beautiful city of Erfurt, Germany. He's open to high-impact projects locally and remotely.";
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
