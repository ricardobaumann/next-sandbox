import { expect, it, vi } from "vitest";
import UserDetail from "./[id]";
import { render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

mockRouter.useParser(createDynamicRouteParser([
  // These paths should match those found in the `/pages` folder:
  "/users/[id]"
]));

vi.mock("../../app/lib/users/create-user");

it("Should render details pagen",async ()=> {
    
    let getUserFn = await import("../../app/lib/users/create-user");
    getUserFn.default = vi.fn().mockReturnValue({id: "1", name: "opa"});

     await mockRouter.push("/users/2");
     render(<UserDetail/>);
 
     expect(screen.getByText("user id 2")).toBeDefined();
     expect(screen.getByText("user name opa")).toBeDefined();
 })

 it("Should render details page with default function2",async ()=> {
    let getUserFn = await import("../../app/lib/users/create-user");
    getUserFn.default = vi.fn().mockReturnValue({id: "1", name: "fooba"});

     await mockRouter.push("/users/3");
     render(<UserDetail/>);
 
     expect(screen.getByText("user id 3")).toBeDefined();
     expect(screen.getByText("user name fooba")).toBeDefined();
 })