import { auth } from '@/lib/auth'
 
export async function createPost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}
 
export async function deletePost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const id = formData.get('id')
 
  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}