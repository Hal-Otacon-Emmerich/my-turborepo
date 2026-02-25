export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined


export type Message = {
    message: string
    status: 'success' | 'error'
}