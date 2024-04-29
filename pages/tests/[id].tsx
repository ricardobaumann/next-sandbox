import type {InferGetServerSidePropsType, GetServerSidePropsContext} from 'next'
import {notFound} from "next/navigation";

type TestDetails = {
    id: number
    name: string
}

export const getServerSideProps = ( (context: GetServerSidePropsContext) => {
    let id = context.params?.['id'] as string;
    if (!id) {
        return({notFound: true});
    }
    const testDetails = {id: parseInt(id), name: "foo"} as TestDetails;
    // Pass data to the page via props
    return { props: { testDetails } }
})

export default function Page({
                                 testDetails,
                             }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main>
            <p>test id {testDetails.id}</p>
            <p>test name {testDetails.name}</p>
        </main>
    )
}