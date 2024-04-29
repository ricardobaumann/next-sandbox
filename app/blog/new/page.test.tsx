import {describe, expect, it, vi} from "vitest";
import { render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

import saveUserFn from "../../lib/users/save-user";
import NewBlog from "./page";


function setup(jsx: React.JSX.Element) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

vi.mock("../../lib/users/save-user",()=> ({
    default: vi.fn().mockImplementation((content:string)=> {
        console.log("submited");
    })
}));

describe("New blog page",()=> {
    it('should submit new blog', async () => {

        let {user} = setup(<NewBlog></NewBlog>);
        let button = screen.getByRole("button");
        expect(button).toBeDefined();

        await user.type(
            screen.getByRole("textbox"),
            "some content"
        );

        await user.click(screen.getByRole("button"));
        expect(screen.getByText("Content: some content"));
        expect(saveUserFn).toHaveBeenCalled();
    });
})