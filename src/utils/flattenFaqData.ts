import { faqDataTwo } from "@/data/faq-data";
import { IFaq } from "@/types/faq-d-t";


export const flattenFaqData = () => {
  const result: (IFaq & { category: string })[] = [];

  faqDataTwo.forEach((group) => {
    group.faqs.forEach((faq) => {
      result.push({ ...faq, category: group.title });
    });
  });

  return result;
};
