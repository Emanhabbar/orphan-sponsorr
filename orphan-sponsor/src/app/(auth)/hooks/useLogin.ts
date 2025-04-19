import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

type LoginData = {
    email: string;
    password: string;
};

interface LoginResponse {
    data: {
        token: string;
        user: {
            id: string;
            email: string;
            profile: {
                name: string;
                phone_number: string;
                avatar: string;
            };
            roles: Array<{ name: string }>;
            is_active: boolean;
            created_at: string;
            rating: number;
        };
    }
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();

    const login = async (data: LoginData) => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post<LoginResponse>(
                "https://tawsella.online/api/login",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            const responseData = response?.data;
            const { token, user } = responseData?.data;
            console.log(response?.data);
            console.log(token);

          

            // تخزين البيانات في الكوكيز
            Cookies.set("user_auth", token, { expires: 7, secure: true });

            // تحديث حالة المستخدم
            setSuccess("Successfully logged in!");
            router.push("/");
        } catch (err: any) {
            setError(
                err.response?.data?.message || "Failed to login. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, success };
};

export default useLogin;
