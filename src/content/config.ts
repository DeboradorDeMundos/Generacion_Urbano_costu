// Content Collections configuration
import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    price: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    specifications: z
      .object({
        material: z.string().optional(),
        sizes: z.array(z.string()).optional(),
        colors: z.array(z.string()).optional(),
        weight: z.string().optional(),
      })
      .optional(),
    features: z.array(z.string()).optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.string().optional(),
      })
      .optional(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    icon: z.string().optional(),
    features: z.array(z.string()),
    process: z
      .array(
        z.object({
          step: z.number(),
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    pricing: z
      .object({
        type: z.enum(["fixed", "range", "quote"]),
        price: z.string().optional(),
        note: z.string().optional(),
      })
      .optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    location: z
      .object({
        city: z.string().optional(),
        region: z.string().optional(),
      })
      .optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.string().optional(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    author: z.string().default("Generación Urbana"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    image: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    readingTime: z.number().optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.string().optional(),
      })
      .optional(),
  }),
});

const faqs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    questions: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    location: z
      .object({
        city: z.string().optional(),
        region: z.string().optional(),
      })
      .optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  products,
  services,
  blog,
  faqs,
};
