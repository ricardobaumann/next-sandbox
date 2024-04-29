import {describe, expect, it} from "vitest";
import Page, {getServerSideProps} from "./[id]";
import {ParsedUrlQuery} from "node:querystring";
import {GetServerSidePropsContext} from "next";
import {render, screen} from "@testing-library/react";

describe("getServerSideProps", ()=> {

    it("should return test details on existing",()=> {
        const context = {
            params: { id: "100" } as ParsedUrlQuery
        };
        expect(getServerSideProps(context as GetServerSidePropsContext))
            .toStrictEqual({
                props:  {
                    testDetails: {
                        id: 100,
                        name: "foo"
                    }
                }
            });
    })

    it('should return not found on non existing', () => {
        const context = {
            params: { } as ParsedUrlQuery
        };
        expect(getServerSideProps(context as GetServerSidePropsContext))
            .toStrictEqual({
                notFound: true
            });
    });

})

describe("Test details page",()=> {
    it('should render page', () => {
        render(<Page testDetails={{id: 1, name: "foo"}}/>)
        expect(screen.getByText("test id 1")).toBeDefined();
        expect(screen.getByText("test name foo")).toBeDefined();
    });
})