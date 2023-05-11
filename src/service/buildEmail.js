import { Configuration, OpenAIApi } from "openai";
import { ref } from "vue";

class EmailApi {
  constructor() {
    this.loading = ref(false);
    this.hasResult = ref(false);
    this.key = "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";
    this.AIConfiguration = new Configuration({
      apiKey: this.key,
    });
    this.openai = new OpenAIApi(this.AIConfiguration);
  }

  async generateEmail(prompt) {
    try {
      this.loading.value = true;
      const result = await this.openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 700,
        temperature: 1.2,
      });
      this.loading.value = false;
      result.data.choices[0].text && (this.hasResult.value = true);
      return result.data.choices[0].text.replaceAll("\n", "<br/>");
    } catch (e) {
      throw new Error(e);
    } finally {
      this.loading.value = false;
    }
  }
}
export default new EmailApi();
