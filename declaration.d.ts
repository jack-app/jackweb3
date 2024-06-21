namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly NOTION_TOKEN: string;
    readonly NOTION_BLOG_DATABASE_ID: string;
    readonly NOTION_ACHIEVEMENTS_DATABASE_ID: string;
    readonly NOTION_PRODUCTS_DATABASE_ID: string;
    readonly NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY: string;
    readonly NEXT_PUBLIC_GOOGLE_CALENDAR_ID: string;
  }
}
