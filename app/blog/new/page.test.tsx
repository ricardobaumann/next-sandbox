import {describe, expect, it, vi} from "vitest";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import NewBlog from "./page";

import addBlogFn from "../../lib/users/add-blog";

let posts:any = [];

vi.mock("../../lib/users/add-blog", () => ({
    default: vi.fn().mockImplementation((formData: FormData) => {
        posts.push(formData.get("content"));
    })
}));

describe("New blog page",()=> {
    it('should submit new user', async () => {

        let result = render(<NewBlog/>);
        let button = screen.getByRole("button");
        expect(button).toBeDefined();

        let text = result.container.querySelector("#content");
        let form = result.container.querySelector("form");
        await userEvent.type(text!, "foo");
        screen.debug();
        await waitFor(() => {
            fireEvent.submit(form!);
        })
        //await new Promise((resolve) => setTimeout(resolve, 2500));
        //expect(posts).toStrictEqual(["foo"]);
    });
})