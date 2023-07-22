import type { PageServerLoad, Actions } from './$types';
import { postsTable } from '$lib/server/schema';
import { db } from '$lib/server/index';

export const load = (async () => {
    let allPosts = db.select().from(postsTable).all();
    return { allPosts };
}) satisfies PageServerLoad;


export const actions: Actions = {
    createPost: async ({ request } ) => {
        let data = await request.formData();
        let content = data.get("content")?.toString() ?? "";
        db.insert(postsTable).values({ content }).run();
        return { success: true };
    },
    deleteAllPosts: async () => {
        db.delete(postsTable).run();
        return { success: true };
    }

} satisfies Actions;
