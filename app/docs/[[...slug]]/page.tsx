// https://nextjs.org/docs/app/api-reference/file-conventions/page

export default async function DocsPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const slug = (await params).slug
  const query = await searchParams
  return (
    <section>
      <h1 className="text-3xl capitalize">{slug?.join(' ')} page</h1>
      <p className="max-w-prose my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora
        tenetur expedita amet blanditiis, voluptas fugiat quo deleniti eos
        obcaecati reiciendis molestias vitae nam molestiae eligendi, sit quas
        incidunt. Et?
      </p>
      <pre>{Object.keys(query).map((key) => `${key}=${query[key]}`)}</pre>
    </section>
  )
}
