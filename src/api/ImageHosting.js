export const getImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=737fe6ae676b4e3a65cde4d20252d1d6`

    const res = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()
    return data.data.display_url 
}