'use server'
export default async function createNewBlog(formData: FormData)  {
    console.log("here");
    await new Promise((resolve) => setTimeout(resolve, 250));

    const text = formData.get('content') as string;

    console.log(`text ${text}`);
};