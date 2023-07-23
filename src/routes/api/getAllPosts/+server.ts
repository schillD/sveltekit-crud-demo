import { db } from '$lib/server';
import { postsTable } from '$lib/server/schema';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    let allPosts = db.select().from(postsTable).all();
    return new Response(JSON.stringify(allPosts));
};