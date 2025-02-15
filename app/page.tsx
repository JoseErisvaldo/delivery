import Title from "@/components/ui/title";

export default async function Home() {
  return (
    <>
      <div>
          <Title title="Home" />
        </div>
      <div className="h-screen flex flex-col gap-12 items-center justify-center text-3xl">
        
      <img className=" w-96 h-96 rounded-full" src="https://img.freepik.com/vetores-gratis/equipe-de-entrega-andar-de-motocicletas-conceito-de-compras_1150-34879.jpg?t=st=1739502151~exp=1739505751~hmac=455e574b0c8b34d9fdf450d6c26f32019d7289705ac7f16fc7bbb833e5633079&w=996" alt="" />
      </div>
    </>
  );
}
