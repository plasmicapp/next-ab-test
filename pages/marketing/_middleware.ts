import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'bucket-marketing'
const MARKETING_BUCKETS = ['original', 'a', 'b'] as const
// Choose a random bucket
const getBucket = () => MARKETING_BUCKETS[Math.floor(Math.random() * MARKETING_BUCKETS.length)]

export function middleware(req: NextRequest) {
  // Get the bucket cookie
  const bucket = req.cookies[COOKIE_NAME] || getBucket()
  const res = NextResponse.rewrite(`/marketing/${bucket}`)

  // Add the bucket to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, bucket)
  }

  return res;
}
