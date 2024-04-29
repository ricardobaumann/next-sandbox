import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type TestDetails = {
    id: number
    name: string
}

export const getServerSideProps = ( (context) => {
    // Fetch data from external API
    let id = context.params?.['id'] as string;
    const testDetails = {id: parseInt(id), name: "foo"} as TestDetails;
    // Pass data to the page via props
    return { props: { testDetails } }
}) satisfies GetServerSideProps<{ testDetails: TestDetails }>

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