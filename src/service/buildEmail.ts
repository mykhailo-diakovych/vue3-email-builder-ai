import { Configuration, OpenAIApi } from "openai";
import { ref } from "vue";

class EmailApi {
  constructor() {
    this.loading = ref(false);
    this.hasResult = ref(false);
    this.AIConfiguration = new Configuration({
      apiKey: import.meta.env.VITE_GPT_KEY,
    });
    this.openai = new OpenAIApi(this.AIConfiguration);
  }

  async generateEmail(prompt, n = 1) {
    try {
      this.loading.value = true;
      this.hasResult.value = false;
      const result = await this.openai.createCompletion({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 700,
        temperature: 1.2,
        n,
      });
      this.loading.value = false;
      result.data.choices.length && (this.hasResult.value = true);
      return result.data.choices;
    } catch (e) {
      throw new Error(e);
    } finally {
      this.loading.value = false;
    }
  }
}
export default new EmailApi();
