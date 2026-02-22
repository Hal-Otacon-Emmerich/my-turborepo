type Message = {
    message: string
    status: 'success' | 'error'
}


export default async function updateCategory(formData: FormData, color: string, id: number): Promise<Message> {
    const name = formData.get('name');
    try {
        const response = await fetch('http://localhost:8080/categories/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name,
                color
            })
        })
        if(response.ok) {
            return { status: "success" , message: 'Настройки усрещно сохранены!'}
        }
        throw new Error('Что-то пошло не так!')
    } catch (error) {
        return { status: 'error', message: `${error}` }
    }
}