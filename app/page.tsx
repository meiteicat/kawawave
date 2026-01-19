import { client } from '@/app/_libs/client';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	const blogs: Blog[] = await client.get({ endpoint: 'blogs' }).then((res) => res.contents);
	console.log(blogs);

	return (
		<section className="font-noto px-10 md:px-32 min-h-[100svh] flex items-center bg-[#fafafa] text-[#252525]">
			<div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[2.8fr_1fr] md:gap-16">
				{/* Left */}
				<div className="pt-14 md:pt-0">
					<h1 className="font-poppins text-4xl font-medium">Kawaguchi Yoshihiro</h1>

					<p className="font-poppins mt-2 text-[12px] text-neutral-500">
						(Live Recording / Mixing / PA)
					</p>

					<p className="font-medium mt-8 md:space-y-1 text-[clamp(22px,2.2vw,30px)] font-bold leading-tight">
						<span className="inline-flex bg-[#252525] text-white py-[1px] leading-none">
							<span className="relative -top-[1px]">やり取りまで含めて</span>
						</span>
						<br />
						<span className="inline-flex bg-[#252525] text-white py-[1px] leading-none">
							<span className="relative -top-[1px]">気持ちよく任せられる音響。</span>
						</span>
					</p>

					<p className="font-normal mt-8 text-[11px] leading-4 ">
						ライブPAを軸に、 録音・ミックスまで一貫して対応。
						<br />
						事前のすり合わせと段取りで、 当日をスムーズに支えます。
					</p>

					<div className="mt-8 flex gap-6 text-[11px]">
						<a className="hover:opacity-60" href="https://facebook.com" target="_blank">
							・ FACEBOOK
						</a>
						<a className="hover:opacity-60" href="https://x.com" target="_blank">
							・ X
						</a>
					</div>
				</div>

				{/* Right (モニュメント置き場：箱だけ) */}
				<div className="flex items-center justify-center">
					{/* <Image src="/logo.png" alt="profile" width={270} height={270} /> */}
				</div>
			</div>
		</section>
	);
}
