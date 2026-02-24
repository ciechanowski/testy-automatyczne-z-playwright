import { ArticlesRequest } from '@_src/api/requests/articles.request';
import { test as baseTest } from '@playwright/test';

interface Request {
  articlesRequest: ArticlesRequest;
}

export const requestObjectTest = baseTest.extend<Request>({
  articlesRequest: async ({ request }, use) => {
    const articlesRequest = new ArticlesRequest(request);
    await use(articlesRequest);
  },
});
