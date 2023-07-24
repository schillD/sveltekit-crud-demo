import type { PageServerLoad, Actions } from './$types';
import { postsTable } from '$lib/server/schema';
import { db } from '$lib/server/index';
import { eq } from 'drizzle-orm';

export const load = (async () => {
    let allPosts = db.select().from(postsTable).all();
    return { allPosts };
}) satisfies PageServerLoad;


export const actions: Actions = {
    createPost: async ({ request }) => {
        let data = await request.formData();
        let content = data.get("content")?.toString() ?? "";
        if(content === "" || content.trim() ==="") return { success: false };
        db.insert(postsTable).values({ content }).run();
        return { success: true };
    },
    deleteAllPosts: async () => {
        db.delete(postsTable).run();
        return { success: true };
    },
    deletePost: async ({request}) => {
        let data = await request.formData();
        let id = Number(data.get("id"));
        db.delete(postsTable).where(eq(postsTable.id, id)).run();
        return { success: true };
    },
    updatePost: async ({request}) => {
        let data = await request.formData();
        let id = Number(data.get("id"));
        let content = String(data.get("content"));
        if(content === "" || content.trim() ==="") return { success: false };
        db.update(postsTable).set({ content }).where(eq(postsTable.id, id)).run();
        return { success: true };
    }

} satisfies Actions;
