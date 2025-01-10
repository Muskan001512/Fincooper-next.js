import { deleteCookie, getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useRouteAccess = () => {
    const { push } = useRouter()
    useEffect(() => {
        if (!getCookie("token")) {
            push("/")
            deleteCookie("token")
        }
    }, [])
    return null;
}

export default useRouteAccess;