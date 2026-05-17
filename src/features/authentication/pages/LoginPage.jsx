import { useAuth } from "@/app/contexts/AuthContext";
import LoginForm from "../ui/LoginForm";

const LoginPage = () => {
  const { error } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-[850px] w-full flex overflow-hidden rounded-2xl border border-app-border">
        <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-text-heading text-4xl font-bold tracking-tight mb-2">
              Selamat Datang
            </h1>
            <p className="text-text-muted text-sm">
              Silakan masuk untuk mengakses dashboard Anda.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-6 rounded">
              <p className="text-red-600 text-xs font-medium">
                {error?.response?.data?.message ||
                  "Username atau password salah."}
              </p>
            </div>
          )}

          <LoginForm />
        </div>

        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10" />
          <img
            src="https://i.pinimg.com/1200x/6f/52/bd/6f52bd37979f385174d5370dae9b6c33.jpg"
            alt="banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-10 left-10 z-20 text-white">
            <h2 className="text-2xl font-bold italic">
              "Pendidikan adalah senjata paling ampuh."
            </h2>
            <p className="text-sm opacity-80 mt-2">— Nelson Mandela</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
