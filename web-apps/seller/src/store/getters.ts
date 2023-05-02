export enum GetterTypes {
  // auth
  GET_USER = 'GET_USER',
  GET_IS_LOADING = 'GET_IS_LOADING',
  GET_SIGN_UP_STEP = 'GET_SIGN_UP_STEP',
  GET_IS_ONBOARDING_COMPLETE = 'GET_IS_ONBOARDING_COMPLETE',

  // auth with namespace
  AUTH_GET_IS_ONBOARDING_COMPLETE = 'auth/GET_IS_ONBOARDING_COMPLETE',

  // audienceStat
  GET_AUDIENCE_STATS = 'GET_AUDIENCE_STATS',
  GET_AUDIENCE_TOTAL_REVENUE = 'GET_AUDIENCE_TOTAL_REVENUE',
  GET_AUDIENCE_STATS_IS_LOADING = 'GET_AUDIENCE_STATS_IS_LOADING',
  GET_AUDIENCE_STATS_HAS_LOADED_SUCCESSFULLY = 'GET_AUDIENCE_STATS_HAS_LOADED_SUCCESSFULLY',
  GET_LIVE_AUDIENCE_COUNT = 'GET_LIVE_AUDIENCE_COUNT',

  // pageCrawls
  GET_RECENT_PAGE_CRAWLS = 'GET_RECENT_PAGE_CRAWLS',
  GET_RECENT_PAGE_CRAWLS_IS_LOADING = 'GET_RECENT_PAGE_CRAWLS_IS_LOADING',
  GET_RECENT_PAGE_CRAWLS_HAS_LOADED_SUCCESSFULLY = 'GET_RECENT_PAGE_CRAWLS_HAS_LOADED_SUCCESSFULLY',
}
