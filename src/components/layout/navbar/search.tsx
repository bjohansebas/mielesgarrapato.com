'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUrl } from '@lib/utils'
import { Form, FormControl, FormField, FormItem } from '@ui/ui/form'
import { Input } from '@ui/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchSchema = z.object({
  search: z.string(),
})

export default function Search() {
  const searchParams = useSearchParams()

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: searchParams?.get('q') || '',
    },
  })

  const router = useRouter()

  function onSubmit(values: z.infer<typeof searchSchema>) {
    const { search } = values

    const newParams = new URLSearchParams(searchParams.toString())

    if (search !== '') {
      newParams.set('q', search)
    } else {
      newParams.delete('q')
    }

    router.push(createUrl('/search', newParams))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-max-[400px] relative w-full lg:w-72 xl:w-full">
        <FormField
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <Input
                    type="search"
                    placeholder="Buscar productos..."
                    autoComplete="off"
                    className="text-sm border-buttercup-300/45"
                    {...field}
                  />
                  <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                    <MagnifyingGlassIcon className="h-4" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
