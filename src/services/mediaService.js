import { axiosPublicIns, axiosPrivateIns } from '../libs/axios'

const getMediaService = () => {
    const getMediaList = async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await axiosPublicIns.get(
                `${mediaType}/${mediaCategory}?page=${page}`
            )
            return { data: response.data }
        } catch (err) {
            return { err }
        }
    }

    return { getMediaList }
}

export default getMediaService
