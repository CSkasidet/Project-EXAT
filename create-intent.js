const dialogflow = require('@google-cloud/dialogflow').v2beta1;
const uuid = require('uuid');

// Replace with your own project ID and JSON key file path
const projectId = 'kasidet-vmek';
const keyFilePath = 'C:/Users/Lenovo/Desktop/Project/kasidet-vmek-e558493d0a9e.json';
const agentId = 'Kasidet1';


// Create a new Intent client
const intentsClient = new dialogflow.IntentsClient({
  credentials: {
    client_email: 'dialogflow-client@kasidet-vmek.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaech2Dze+fQpR\nXqzcRx2iW8AljiLv0wkIaBsRXxEQn2ilSjNmCp6xoBoyB9Nl5pAbasA09m+/vttY\nNuMTvomdldiJPHgHyqaX0T8ck6XvYep8g++HcZR2uoy/i+BtVJWB2LEa9871hWM3\nBQZmPkgYWoUrZQLpkFYoQl+FvwhIHpTIPAyYmDhyZ4ohSsWx3dBRBlQdMMM8NKky\nNTSApCbEqS9VAKNUfH1owueYVUCpOh0b7kKEpmhu0WvmWWBs59QCML5TfHU8RYiB\nzKzpawUc9Ie98F39HOIoB7gTRtFe7UllcBxNGCNLG7KPytfk5tqEC8+6e4MIZsgQ\nTBgNwi4zAgMBAAECggEAGQwNZJR7wxI+kwpZLZpbrrtWa4B2ymYbJ9bMKhk9CMdK\nzh+QN/Ju4CQykHwpBckdrU8LfUrxZv4eTgO69rTwAVzjmv+dWBNpcbexlljxEIso\nMdT+s0/Hn9IIXPfkMDYFITmudc31K7rbZyIUczg+s7GHDY3iVqwFnEouzN6NtuD7\nW699EapyUmIZx6fMQ1HihlW3sObKxrD5suTYT2YkeuGxDIiHea5edQ3j8CAzrss9\nUpAv8MjustGlHx94YTDuTwBAlg+SIdc0/ue0WvbO0sSRYv3c4axC5MEF4Nz2j3ex\nj2zDoMW9+PBSCytX3QwQ/9Cs23neoxlubPNLQt0j+QKBgQDJcgH/TjVvdIDcG1pI\nZjBJbVgI3fBWcqLk4/i28P4BQsy+QvHwTJJ6cAYGQSDAnZ957sLTExLZ4duAAjgK\n9JtFCvX8lrAXIP8AhSt7gxLyRkLgDThbAK8dN4kN3zsn66fqduomAPrxnrGaxJUf\nEZ3qthvTLFqL4QxQLQqYUbHAlwKBgQDET2uzmIA5iI8rQSxsCRgyr4q4AvCknGFo\nFopneMSDIfly88bseZ6q2i6TBzQF4SY+FDLymKOfOkedpAy5T8MnqB/8R4LUMv8/\n5UKvc86ZTy4fOZD2ismjmuKUWO7OgAJRDWqTyLAuEUjpcmBtOeHuHOZbpaoQrMrV\nJKdkI3QWxQKBgH4zFz87XsyJPyUlWaUbp8qIXuuHJsbxoE0m6KyrQ2XE1IGpbOpu\n/iEIRy3p5TvmQ39e7dzQCTJIhXunaDas0Q0q9bodKQoEWNyZkQkar2bqT4EPpyuT\nvSDfptPy8ptqzdJcVwoh+RQfqAJef1FsdvMQzVO5aKxS+6TK4uVT4LjXAoGAWqcy\nXSU3UVo2gwr9sIYinoVh0cfJyLpOYPrHvzCNzuCJiQP6AInJM6y9hTf2ViC6wEAj\nptPF+2m2WJ3BInIq9M02uBFt4QALzz3XpZ4c8b8W1WSIBNHie6Kyrz7CSKnkZ/mC\nFey/LwbcXLFsxgPMyWCfIANInZqtr+/VPPECUuECgYB7+9ocjWXz3qtRrXCHua/m\nWaJhMLEcrAG+ZWszjXF7he6hzcTvYkJL9oWOILeXvt2vglMWQIIgCsKm5OutgeVd\n+TJJ9uenoFv4NjH4GjkrgotENWQgRNWUWD7rOCWpTsBQ0/6WNV9q1Nx3asm08iro\nee16vkI/wY9hwnVAj4ZpxA==\n-----END PRIVATE KEY-----\n',
  },
  projectId: projectId,
});

// The name of the agent to create the intent in
const agentPath = intentsClient.projectAgentPath(projectId);

// The name of the intent to create
const intentName = 'my-custom-intent2';

// The training phrases for the intent
const trainingPhrases = [
  'Hi there',
  'Hello',
  'Hey'
];

// The response message for the intent
const messageTexts = [
  'Hi, how can I help you?',
  'Hello, what can I do for you?',
  'Hey there, how can I assist you?',
];

// Create the training phrases for the intent
const trainingPhraseParts = trainingPhrases.map((phrase) => {
  return {
    text: phrase,
  };
});

const trainingPhrasesObj = {
  parts: trainingPhraseParts,
};

// Create the message for the intent
const messageText = {
  text: messageTexts,
};

const messageObj = {
  text: messageText,
};

// Create the intent
const intent = {
  displayName: intentName,
  trainingPhrases: [trainingPhrasesObj],
  messages: [messageObj],
};

const createIntentRequest = {
  parent: agentPath,
  intent: intent,
};

// Send the request to Dialogflow
intentsClient.createIntent(createIntentRequest)
  .then((response) => {
    console.log(`Intent ${intentName} created`);
  })
  .catch((error) => {
    console.error(error);
  });
