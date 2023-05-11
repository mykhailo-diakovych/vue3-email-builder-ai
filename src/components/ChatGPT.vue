<template>
  <div class="bg-gray-100 h-screen w-screen overflow-auto">
    <p class="text-white text-center text-3xl pt-5">Welcome to Chat GPT</p>
    <div class="flex items-center w-[40rem] mx-auto mt-5 gap-4">
      <input
        v-model.trim="input"
        class="bg-gray-200 rounded-md w-full p-2 text-white focus:outline-0 block mx-auto border border-white"
        type="text"
        placeholder="Prompt..."
      />
      <button
        class="text-white bg-gray-200 p-2 rounded-md m-0"
        @click="onSearch"
      >
        Search
      </button>
      <button
        class="text-white bg-gray-200 p-2 rounded-md m-0 whitespace-nowrap"
        @click="onImage"
      >
        Generate image
      </button>
    </div>
    <div class="p-5 h-full">
      <div
        class="max-h-[60rem] overflow-auto rounded-md w-full mx-auto bg-gray-200 h-full p-5"
      >
        <div
          v-for="(question, index) in userQuestions"
          :key="index"
          class="mt-5"
        >
          <div class="flex">
            <div
              class="bg-white w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full"
            >
              MD
            </div>
            <div class="flex flex-col ml-2">
              <p class="text-gray-800 rounded-md px-2 text-xs bg-red-50 w-fit">
                {{ question.time }}
              </p>
              <p class="text-white">{{ question.question }}</p>
            </div>
          </div>
          <div class="mt-3">
            <p class="text-white border-b border-white w-fit mb-2">Answer:</p>
            <!-- <p v-if="chatAnswers[index] && !chatAnswers[index].includes('https')" class="text-white">{{ chatAnswers[index] }}</p>-->
            <div
              v-if="chatAnswers[index]"
              class="text-white"
              v-html="chatAnswers[index].replaceAll('\n', '<br/>')"
            />
            <!--<img v-if="chatAnswers[index] && chatAnswers[index].includes('https')"  class="w-60 h-60" :src="chatAnswers[index]" alt="">-->
            <loader v-else class="mt-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const chatKey = "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";
import { OpenAIApi, Configuration } from "openai";
import dayjs from "dayjs";
import Loader from "@/components/ui/loader.vue";

const input = ref();
const chatAnswers = ref([]);
const userQuestions = ref([]);

const AIConfiguration = new Configuration({
  apiKey: chatKey,
});
const openai = new OpenAIApi(AIConfiguration);
const onSearch = async () => {
  userQuestions.value.push({
    time: dayjs().format("YYYY-MM-DD - HH:mm"),
    question: input.value,
  });

  // const res =  await openai.createChatCompletion({
  // 	model: 'gpt-3.5-turbo',
  // 	messages: [{ role: 'user', content: input.value }]
  // })
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input.value,
    max_tokens: 700,
    temperature: 1.2,
  });
  chatAnswers.value.push(res.data.choices[0].text);
};

const onImage = async () => {
  userQuestions.value.push({
    time: dayjs().format("YYYY-MM-DD - HH:mm"),
    question: input.value,
  });
  const response = await openai.createImage({
    prompt: input.value,
    n: 1,
    size: "1024x1024",
  });
  chatAnswers.value.push(response.data.data[0].url);
};
</script>

<style scoped></style>
