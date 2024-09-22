import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

export default async ({ apiKey = '', identity = '', steps = '', formats = '', input = '' }) => {
  let result = null;

  // Instantiate Model
  const llm = new ChatOpenAI({
    modelName: 'gpt-4o-mini',
    temperature: 0.7,
    apiKey,
  });

  const prompt = ChatPromptTemplate.fromMessages([
    {
      role: 'system',
      content: `
        # IDENTITY AND PURPOSE
       
        {identity}

        # STEPS
       
        {steps}

        # OUTPUT INSTRUCTIONS
       
        {formats}

        # INPUT
       
        INPUT: {input}
      `,
    },
  ]);

  // Ensure that chain.invoke correctly passes the variables
  result = await prompt.pipe(llm).invoke({
    identity,
    steps,
    formats,
    input,
  });
  result = result?.content;

  return { result };
};
