import { GithubIcon, YoutubeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col bg-slate-900">
      <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
        <div className="flex relative flex-col py-16 w-full max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d39494da212ff05b4c89cfd3de24868e0e043ec78658673f11d4ec62caaef1?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
            className="object-contain absolute right-0 bottom-0 z-0 aspect-[2.06] h-[933px] w-[1920px] max-md:max-w-full"
          />
          <div className="flex z-0 justify-center items-center self-center max-w-full w-[1224px]">
            <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col items-center max-md:max-w-full">
                <div className="flex flex-col items-center text-center max-md:max-w-full">
                  <div className="text-6xl font-bold tracking-tight leading-none bg-clip-text bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0.7)] max-md:max-w-full max-md:text-4xl">
                    AI Powered Social Media Analytics Platform
                  </div>
                  <div className="mt-8 text-lg leading-7 text-slate-400 w-[799px] max-md:max-w-full">
                    Rorem ipsum dolor sit amet consectetur. Gravida convallis
                    orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam
                    sed amet vitae orci ac penatibus consectetur.
                  </div>
                </div>
                <div className="flex gap-8 items-start mt-8 text-lg font-medium leading-none">
                  <div className="flex items-center gap-2.5 self-stretch px-6 py-4 text-white bg-violet-600 rounded-[36px] max-md:px-5">
                    <YoutubeIcon className="w-7 h-7" /> View Demo
                  </div>
                  <div className="flex  items-center gap-2.5 self-stretch px-6 py-4 border border-solid border-slate-800 rounded-[46px] text-neutral-100 max-md:px-5">
                    <GithubIcon className="w-7 h-7" /> Github
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4de75468ca1be17d41415102fead6b1a0c81cbd4d904b356bcbad48d0a81f0f3?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                className="object-contain mt-12 max-w-full rounded-none aspect-[1.57] w-[808px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-16 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center items-center max-w-full w-[1224px]">
            <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
              <div className="self-stretch my-auto text-6xl font-bold tracking-tighter bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] leading-[64px] w-[712px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                Powerful features to help you manage all your leads
              </div>
              <div className="self-stretch my-auto text-base leading-6 text-slate-400 w-[392px]">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc89a5fee4ed29157110e842735498b3548c370f780548fd22ee37d851af2a62?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain aspect-[1.18] w-[53px]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    User information
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Borem ipsum dolor sit amet consectetur. Turpis tristique
                    nulla posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec566cdea650b38c2a4e3796637603814d8352a4ea4f88a7f732046eee8491?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain w-12 aspect-[1.04]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    Deal tracking
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Worem ipsum dolor sit amet consectetur. Turpis tristique
                    nulla posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05cf210f0c76b11c64612d9e27c9b9395dadc718655951cdcc5ca86e6ba76c17?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain aspect-square w-[45px]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    Pipeline management
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Dorem ipsum dolor sit amet consectetur. Turpis tristique
                    nulla posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>

              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56c607eb1201d4b1437ee4aead363393131f1845af529ff754cc780bf3f3a26f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain aspect-[0.76] w-[34px]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    Reporting dashboard
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Yarem ipsum dolor sit amet consectetur. Turpis tristique
                    nulla posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/305c2a1c340f00fab0eb7922fcda7076925d808dc187e4ec05442f01da3a4d66?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain aspect-square w-[45px]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    Meeting scheduling
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Bem ipsum dolor sit amet consectetur. Turpis tristique nulla
                    posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-8 pr-10 pl-8 rounded border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[393px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbf75fb1df64581866f55be93a4aa58056048df894f9b8891b8c9fa3350ffd69?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain aspect-[1.04] w-[47px]"
                />
                <div className="flex flex-col mt-8 w-full">
                  <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100">
                    Email tracking
                  </div>
                  <div className="mt-3 text-base leading-6 text-slate-400">
                    Keem ipsum dolor sit amet consectetur. Turpis tristique
                    nulla posuere et amet arcu dictum ultricies convallis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-16 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center items-center max-w-full w-[1224px]">
            <div className="flex flex-col items-center font-bold text-center max-md:max-w-full">
              <div className="text-6xl tracking-tighter leading-none bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:max-w-full max-md:text-4xl">
                Essential apps that protect your
              </div>
              <div className="flex flex-wrap gap-8 items-start mt-5 text-5xl tracking-tighter leading-none whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                <div className="flex gap-3 items-center max-md:text-4xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db2ae82607dc05d09736eab34f936ea04bfb11d03e6546ac23ba9551bc30fd7?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.43] w-[43px]"
                  />
                  <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:text-4xl">
                    Email,
                  </div>
                </div>
                <div className="flex gap-3 items-center max-md:text-4xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b732c535609a88e56a62c4ed86211f4eff98e7f5f5e68fe6855a4c928d4ba49b?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.03] w-[31px]"
                  />
                  <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:text-4xl">
                    Events,
                  </div>
                </div>
                <div className="flex gap-3 items-center max-md:text-4xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f77321e4e48ddb7eaf8b73659765cca32136f7e9152b1d6a8eb54fa279e495?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.27] w-[38px]"
                  />
                  <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:text-4xl">
                    Files,
                  </div>
                </div>
                <div className="flex gap-3 items-center min-w-[240px] max-md:text-4xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e48f38afda5b017d554219bfc0d833c0e69425eaa7a38d687d66b7869d37b2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.77] w-[23px]"
                  />
                  <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:text-4xl">
                    Documents
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-16 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
              <div className="flex relative gap-10 items-start p-16 w-full rounded-xl border border-solid bg-slate-900 border-slate-800 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e06f12dd807dd5c94c30328dd7e6d657c32347728b3083af3b152d978f9790?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain absolute top-0 left-0 z-0 self-start rounded-none aspect-[1.13] h-[512px] min-w-[240px] w-[577px] max-md:max-w-full"
                />
                <div className="flex z-0 flex-col my-auto min-w-[240px] w-[465px] max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="text-3xl font-bold tracking-tighter leading-10 text-neutral-100 max-md:max-w-full">
                      End-to-end encrypted inbox and messages
                    </div>
                    <div className="mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
                      Rorem ipsum dolor sit amet consectetur. Proin dignissim
                      tortor mauris viverra sed volutpat mauris. Amet nisi amet
                      commodo adipiscing ut imperdiet nunc.
                    </div>
                  </div>
                  <div className="gap-2.5 self-start px-6 py-4 mt-9 text-base font-medium leading-none border border-solid border-slate-800 rounded-[46px] text-neutral-100 max-md:px-5">
                    Learn More
                  </div>
                </div>
                <div className="flex z-0 flex-col flex-1 shrink my-auto rounded-none basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col px-5 py-5 rounded-xl border border-solid bg-slate-900 border-slate-800 max-md:pr-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb72316eae9271b39a6ea2a94b8f06fd6f5c01cd7cbecc9429a7b5976aea7a1?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                      className="object-contain rounded-none aspect-[19.61] w-[473px] max-md:max-w-full"
                    />
                    <div className="self-start mt-6 text-lg font-bold tracking-tight leading-none text-neutral-100">
                      Invitation to present at Bsides
                    </div>
                    <div className="flex flex-col p-4 mt-3.5 w-full rounded border border-solid bg-slate-900 border-slate-800 max-md:mr-1 max-md:max-w-full">
                      <div className="flex gap-10 items-start leading-none max-md:max-w-full">
                        <div className="flex gap-2 items-start">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c13bbb22b5db7b6edf7e8c9850f733f773f2ac5781e29de6d24a194f0179d216?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                            className="object-contain shrink-0 rounded-md aspect-square w-[30px]"
                          />
                          <div className="flex flex-col">
                            <div className="text-sm font-medium text-neutral-100">
                              R. Baynham
                            </div>
                            <div className="mt-1.5 text-xs text-slate-400">
                              tranthuy.nute@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">
                          Feb 8, 2023
                        </div>
                      </div>
                      <div className="mt-3.5 text-sm leading-6 text-slate-400 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Non eget
                        facilisis justo euismod ante mauris orci cursus.{" "}
                      </div>
                    </div>
                    <div className="flex flex-col p-4 mt-4 w-full rounded border border-solid bg-slate-900 border-slate-800 max-md:mr-1 max-md:max-w-full">
                      <div className="flex gap-10 items-start leading-none max-md:max-w-full">
                        <div className="flex gap-2 items-start">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b23df424a85a80179b84e74ff734b0dccb2cab8c9091c461664c0d55b818110f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                            className="object-contain shrink-0 rounded-md aspect-square w-[30px]"
                          />
                          <div className="flex flex-col">
                            <div className="text-sm font-medium text-neutral-100">
                              Cooper Kristin
                            </div>
                            <div className="mt-1.5 text-xs text-slate-400">
                              tranthuy.nute@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">
                          Feb 8, 2023
                        </div>
                      </div>
                      <div className="mt-3.5 text-sm leading-6 text-slate-400 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Non eget
                        facilisis justo euismod ante mauris orci cursus.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17bc0ba2a4b7fe839aa1e1b5df3b375d99258b0534a8a10dc4a11440cbd2dd8?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain absolute top-0 right-0 z-0 self-start rounded-none aspect-[1.21] h-[512px] min-w-[240px] w-[619px] max-md:max-w-full"
                />
              </div>
              <div className="flex  gap-10 items-stretch mt-10 max-md:max-w-full">
                <div className="flex  relative flex-col items-start px-14 py-12 rounded-xl border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[496px] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/659ae9e1ff4abebe12f4b0276e75d59a554d2ff1c768702563ea009db4e1477a?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain absolute right-0 bottom-0 z-0 max-w-full rounded-none aspect-[2.31] h-[215px] w-[496px]"
                  />
                  <div className="flex z-0 flex-col self-center max-w-full w-[386px]">
                    <div className="text-3xl font-bold tracking-tighter leading-none text-neutral-100">
                      Mobile applications
                    </div>
                    <div className="mt-4 text-base leading-6 text-slate-400">
                      Prem ipsum dolor sit amet consectetur. Viverra sed
                      dignissim risus aliquet condimentum. Vulputate varius
                      feugiat egestas congue{" "}
                    </div>
                  </div>
                  <div className="flex absolute top-0 right-0 z-0 max-w-full rounded-none h-[356px] min-h-[356px] w-[496px]" />
                </div>
                <div className="flex relative overflow-hidden flex-col items-center px-14 pt-12 rounded-xl border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[690px] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ccec602f6137a9abb270e789ab8cb33450b39c4534372928ed073f778f26d7?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain absolute top-0 left-0 z-0 max-w-full rounded-none aspect-[3.76] h-[183px] w-[689px]"
                  />
                  <div className="flex z-0 flex-col self-center max-w-full w-[578px]">
                    <div className="text-3xl font-bold tracking-tighter leading-none text-neutral-100 max-md:max-w-full">
                      Upload, share, and preview any file
                    </div>
                    <div className="mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
                      Tellus et adipiscing sit sit mauris pharetra bibendum.
                      Ligula massa netus nulla ultricies purus.
                    </div>
                  </div>
                  <div className="flex z-0 flex-col self-center mt-8 max-w-full rounded-none w-[580px]">
                    <div className="flex flex-col px-5 pt-5 w-full rounded-xl border border-solid bg-slate-900 border-slate-800 max-md:max-w-full">
                      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-sm leading-none whitespace-nowrap text-slate-600 max-md:max-w-full">
                        <div className="flex gap-1.5 items-center self-stretch my-auto">
                          <div className="flex gap-4 items-center self-stretch my-auto">
                            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded border border-gray-700 border-solid" />
                            <div className="self-stretch my-auto">Name</div>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c12f8fac2d13cdf0d83608c2b4990c938deeec422f38cd29a53f1d91dcf03a?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                          />
                        </div>
                        <div className="self-stretch my-auto">Type</div>
                        <div className="self-stretch my-auto">Size</div>
                      </div>
                      <div className="shrink-0 mt-3.5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[539px]" />
                      <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-md:max-w-full">
                        <div className="flex gap-4 items-center self-stretch my-auto w-44">
                          <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded border border-gray-700 border-solid bg-slate-900" />
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md border border-solid bg-slate-900 border-slate-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b59150824f06f2df56d360d0d33f7ab70d299e6e47c490bb9a91f252f037271?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                                className="object-contain w-5 aspect-square"
                              />
                            </div>
                            <div className="self-stretch my-auto text-sm leading-none text-slate-400">
                              Q1 overview
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-slate-400">
                          Files
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none text-right basis-0 text-slate-400">
                          10.5 GB
                        </div>
                      </div>
                      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[539px]" />
                      <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-md:max-w-full">
                        <div className="flex gap-4 items-center self-stretch my-auto w-44">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf3ee08e180922c760a3b4ec605f1d8165d53e206e9874bba267a07c349091f?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                            className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                          />
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md border border-solid bg-slate-900 border-slate-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbb7a1a16bdefec9463a1b65198dd527babf6598127a8e438b9dd42eacab30?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                                className="object-contain w-5 aspect-square"
                              />
                            </div>
                            <div className="self-stretch my-auto text-sm leading-none text-slate-400">
                              Team review
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-slate-400">
                          Docx
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none text-right basis-0 text-slate-400">
                          5.5 GB
                        </div>
                      </div>
                      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[539px]" />
                      <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-md:max-w-full">
                        <div className="flex gap-4 items-center self-stretch my-auto w-44">
                          <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded border border-gray-700 border-solid bg-slate-900" />
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md border border-solid bg-slate-900 border-slate-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fefa1c14eabc3cc3d0f9777401d24d85b52345b1e4a8be668ab4a5ae008479a?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                                className="object-contain w-5 aspect-square"
                              />
                            </div>
                            <div className="self-stretch my-auto text-sm leading-none text-slate-400">
                              Fetch table.py
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-slate-400">
                          Code
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none text-right basis-0 text-slate-400">
                          7.5 GB
                        </div>
                      </div>
                      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[539px]" />
                      <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-md:max-w-full">
                        <div className="flex gap-4 items-center self-stretch my-auto w-44">
                          <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded border border-gray-700 border-solid bg-slate-900" />
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md border border-solid bg-slate-900 border-slate-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ef711b55291651d8bc28c39addc87088ad23226d818074cefe4cc897171127?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                                className="object-contain w-5 aspect-square"
                              />
                            </div>
                            <div className="self-stretch my-auto text-sm leading-none text-slate-400">
                              Cap table.xls
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-slate-400">
                          XLS
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none text-right basis-0 text-slate-400">
                          2.5 GB
                        </div>
                      </div>
                      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[539px]" />
                      <div className="flex z-10 flex-wrap gap-10 items-center mt-5 -mb-2.5 w-full max-md:mb-2.5 max-md:max-w-full">
                        <div className="flex gap-4 items-center self-stretch my-auto w-44">
                          <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded border border-gray-700 border-solid bg-slate-900" />
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md border border-solid bg-slate-900 border-slate-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2663c2526a1a2ee45bc3f0c0e3ee573f8d220170b2ba30ea76890098e48b1ff5?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                                className="object-contain w-5 aspect-square"
                              />
                            </div>
                            <div className="self-stretch my-auto text-sm leading-none text-slate-400">
                              Q1 overview
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0 text-slate-400">
                          Files
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none text-right basis-0 text-slate-400">
                          10.5 GB
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9da8e4adb0153d865aa6983f0b0783ed2ff391b54116f103b49e2b1c1bba7705?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain absolute bottom-0 left-0 z-0 max-w-full rounded-none aspect-[1.75] h-[393px] w-[689px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-start mt-16 text-base font-medium leading-none max-md:mt-10">
              <div className="gap-2.5 self-stretch px-6 py-4 text-white bg-violet-600 rounded-[36px] max-md:px-5">
                Get a Started
              </div>
              <div className="gap-2.5 self-stretch px-6 py-4 border border-solid border-slate-800 rounded-[46px] text-neutral-100 max-md:px-5">
                Browse all feature
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-16 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center items-center max-w-full w-[1224px]">
            <div className="flex relative flex-col px-14 py-12 rounded-xl border border-solid bg-slate-900 border-slate-800 max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d15e9f6d2a40487a5ab252d3eb0d1b5faef9aed5facb85363abce47109d2544?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                className="object-contain absolute bottom-0 left-0 z-0 rounded-none aspect-[1.35] h-[903px] w-[1222px]"
              />
              <div className="flex z-0 flex-wrap gap-10 items-center max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[454px] max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[454px]">
                    <div className="text-5xl font-bold tracking-tighter bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                      Transparent, audited, &open source
                    </div>
                    <div className="mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
                      Torem ipsum dolor sit amet consectetur. Nulla quisque
                      scelerisque eget quis. Eu amet amet eu interdum.
                    </div>
                  </div>
                  <div className="gap-2.5 self-start px-6 py-4 mt-10 text-base font-medium leading-none border border-solid border-slate-800 rounded-[46px] text-neutral-100 max-md:px-5">
                    Browse all feature
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto text-xs leading-5 rounded-none min-w-[240px] w-[527px] max-md:max-w-full">
                  <div className="flex relative flex-col p-4 w-full rounded-none min-h-[400px] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/394aecd77ccab1e4ecabca59a21be1a5a32958b1dceac0fc1569bce75ef55204?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative gap-2.5 self-start px-5 py-6 text-rose-400 rounded-xl bg-slate-900">
                      <span className="text-blue-500">const</span>{" "}
                      <span className="text-cyan-200">salt = srp.</span>
                      <span className="text-red-400">generateSalt</span>();
                      <br />
                      <span className="text-blue-500">const</span>{" "}
                      <span className="text-cyan-200">masterSecret</span> ={" "}
                      <span className="text-rose-400">await</span>{" "}
                      createKeyFromSecret(
                      <span className="text-cyan-200">password, salt</span>);
                      <br />
                      <br />
                      <span className="text-blue-500">const</span>{" "}
                      <span className="text-cyan-200">verifierPrivateKey</span>{" "}
                      = <span className="text-rose-400">await </span>
                      <span className="text-red-400">createSRPKey</span>(
                      <span className="text-cyan-200">password, salt</span>);
                      <br />
                      <span className="text-blue-500">const</span>{" "}
                      <span className="text-cyan-200">verifier = srp.</span>
                      <span className="text-red-400">deriveVerifier</span>(
                      <span className="text-cyan-200">verifierPrivateKey</span>
                      );
                    </div>
                    <div className="relative gap-2.5 self-end px-7 py-6 mt-16 rounded-xl bg-slate-900 text-slate-500 w-[361px] max-md:px-5 max-md:mt-10">
                      // recoverySigningPublicKey is the public key component of
                      the keypair used
                      <br />
                      // to sign SSS shards. Upon share re-combination,
                      spliterati verifies attached
                      <br />
                      // signatures of each shard to confirm that the shard is
                      correct.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex z-0 flex-wrap gap-4 items-stretch mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center px-8 pt-8 rounded-xl border border-solid bg-slate-900 border-slate-800 min-h-[363px] min-w-[240px] w-[540px] max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full min-h-[90px] w-[480px]">
                    <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100 max-md:max-w-full">
                      Product Mail
                    </div>
                    <div className="mt-2.5 text-base leading-6 text-slate-400 max-md:max-w-full">
                      Gonsectetur eque nec nunc facilisis tellus tincidunt.
                      Malesuada maecenas ac bibendum consectetur.
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 mt-8 max-w-full rounded-none w-[417px]">
                    <div className="flex flex-col px-5 pt-3.5 pb-1.5 w-full rounded-xl bg-slate-900">
                      <div className="self-start text-base text-neutral-100">
                        New Message
                      </div>
                      <div className="flex gap-5 justify-between mt-8 w-full max-md:mr-1">
                        <div className="flex gap-5">
                          <div className="self-start text-sm leading-loose text-slate-400">
                            To
                          </div>
                          <div className="flex gap-1.5 justify-center items-center px-2.5 py-0.5 text-xs leading-loose bg-slate-800 rounded-[30px] text-neutral-100">
                            <div className="self-stretch my-auto">Sajib H.</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5024f98552a0bfb4dbad084c8a7019a8209136f443c6a6351b13be25c2b025a7?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="flex gap-3.5 self-start text-sm leading-loose whitespace-nowrap text-slate-400">
                          <div>CC</div>
                          <div>BCC</div>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1.5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[376px]" />
                      <div className="flex gap-6 self-start mt-4 text-sm leading-loose">
                        <div className="text-slate-400">Subject</div>
                        <div className="basis-auto text-neutral-100">
                          Dacilisis tellus tinc
                        </div>
                      </div>
                      <div className="shrink-0 mt-3.5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[376px]" />
                      <div className="flex gap-10 self-start mt-4 text-sm leading-loose whitespace-nowrap">
                        <div className="text-slate-400">From</div>
                        <div className="text-neutral-100">
                          acilisis@email.com
                        </div>
                      </div>
                      <div className="shrink-0 mt-3.5 max-w-full h-px border border-solid bg-slate-800 border-slate-800 w-[376px]" />
                      <div className="self-start mt-4 text-sm leading-loose text-neutral-100">
                        Gilisis
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center px-8 pt-8 rounded-xl border border-solid bg-slate-900 border-slate-800 min-h-[363px] min-w-[240px] w-[547px] max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full min-h-[90px] w-[480px]">
                    <div className="text-2xl font-bold tracking-tighter leading-none text-neutral-100 max-md:max-w-full">
                      Product UI
                    </div>
                    <div className="mt-2.5 text-base leading-6 text-slate-400 max-md:max-w-full">
                      Honsectetur eque nec nunc facilisis tellus tincidunt.
                      Malesuada maecenas ac bibendum consectetur.
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/02dddd8d222d4db26c237bf10499ff090e0242313ec0062da6fae4af65d0227e?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain mt-8 max-w-full rounded-none aspect-[2.31] w-[487px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-16 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center items-center max-w-full w-[1224px]">
            <div className="flex flex-col items-center max-w-full w-[636px]">
              <div className="text-6xl font-bold tracking-tighter leading-none bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:max-w-full max-md:text-4xl">
                What our clients say
              </div>
              <div className="mt-6 text-base leading-6 text-center text-slate-400 max-md:max-w-full">
                Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
                lobortis orci tincidunt facilisis. Pulvinar lacus ultricies
                turpis urna sapien.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 min-h-[235px] max-md:max-w-full">
                <div className="flex flex-col items-center min-w-[240px] w-[343px]">
                  <div className="flex relative flex-col flex-1 p-6 w-full rounded-xl border border-solid bg-slate-900 border-slate-800 max-w-[343px] max-md:px-5">
                    <div className="flex z-0 gap-2.5 items-center w-full leading-none">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6a58b534f5742879acde6c887508e8f24bdfea67a693e16baf73acafdacc36?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-xl aspect-square"
                      />
                      <div className="flex flex-col self-stretch my-auto w-40">
                        <div className="text-base font-medium text-neutral-100">
                          Cameron Williamson
                        </div>
                        <div className="mt-2.5 text-xs text-slate-400">
                          Web Designer
                        </div>
                      </div>
                    </div>
                    <div className="z-0 mt-6 text-base leading-6 text-neutral-100">
                      Rorem ipsum dolor sit amet consectetur. Ac quam sem mi
                      nibh volutpat enim pellentesque. Proin iaculis nisl et
                      neque sed fermentum sollicitudin lectus.{" "}
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f3523233a7fa57af6bf46bc2dc70313356335e7303ccbe8e9e2f471207bbd3b?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                      className="object-contain absolute z-0 aspect-[1.39] fill-slate-900 h-[41px] right-[25px] top-[25px] w-[57px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center min-w-[240px] w-[343px]">
                  <div className="flex relative flex-col flex-1 p-6 w-full rounded-xl border border-solid bg-slate-900 border-slate-800 max-w-[343px] max-md:px-5">
                    <div className="flex z-0 gap-2.5 items-center w-full leading-none">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/532fdb5ee87fcc10a4da095f77476a0366280082b04c32608e67f958c7b740e2?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-xl aspect-square"
                      />
                      <div className="flex flex-col self-stretch my-auto w-40">
                        <div className="text-base font-medium text-neutral-100">
                          Esther Howard
                        </div>
                        <div className="mt-2.5 text-xs text-slate-400">
                          Web Developer
                        </div>
                      </div>
                    </div>
                    <div className="z-0 mt-6 text-base leading-6 text-neutral-100">
                      At viverra enim enim sed turpis orci cursus. Imperdiet
                      eros mauris sed sodales nisi interdum ac. Eu congue quis
                      egestas donec lectus
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f3523233a7fa57af6bf46bc2dc70313356335e7303ccbe8e9e2f471207bbd3b?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                      className="object-contain absolute z-0 aspect-[1.39] fill-slate-900 h-[41px] right-[25px] top-[25px] w-[57px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center min-w-[240px] w-[343px]">
                  <div className="flex relative flex-col flex-1 p-6 w-full rounded-xl border border-solid bg-slate-900 border-slate-800 max-w-[343px] max-md:px-5">
                    <div className="flex z-0 gap-2.5 items-center w-full leading-none">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1f4a920fc278589f2353c6d1c1e5269419ebf5fdde75bea29ad0e16448358?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-xl aspect-square"
                      />
                      <div className="flex flex-col self-stretch my-auto w-40">
                        <div className="text-base font-medium text-neutral-100">
                          Jenny Wilson
                        </div>
                        <div className="mt-2.5 text-xs text-slate-400">
                          UI/UX Designer
                        </div>
                      </div>
                    </div>
                    <div className="z-0 mt-6 text-base leading-6 text-neutral-100">
                      Sed ut diam amet accumsan in. Elementum lorem aliquam
                      venenatis amet sit posuere sed sit. Aliquet suspendisse
                      vitae placerat donec.
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f3523233a7fa57af6bf46bc2dc70313356335e7303ccbe8e9e2f471207bbd3b?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                      className="object-contain absolute z-0 aspect-[1.39] fill-slate-900 h-[41px] right-[25px] top-[25px] w-[57px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start mt-16 max-md:mt-10">
                <div className="flex gap-2.5 items-center py-2 pr-2 pl-1.5 rounded-lg border border-solid bg-slate-900 border-slate-800 h-[38px] w-[38px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/063ad4a3fe89688e374ce36778c034354e2a48344e78a52e74601275b0d67643?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain aspect-[1.04] w-[25px]"
                  />
                </div>
                <div className="flex gap-2.5 items-center p-2 rounded-lg border border-solid bg-slate-900 border-slate-800 h-[38px] w-[38px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00b2942a6941359d3b66dd1a233776c38e355dce818a4724956d04f136f67f1a?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                    className="object-contain w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-16 w-full max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-start py-24 max-w-full w-[1224px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13742b922789275984e9ddf011d553fbcff37875f5c8df1738675800d0a4762c?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
              className="object-contain absolute top-2/4 left-2/4 z-0 max-w-full rounded-none -translate-x-2/4 -translate-y-2/4 aspect-[2.26] h-[450px] w-[1016px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4174b9d19c1f034079df931818679b9ae2981ac63969378ec7524b0604cd35c5?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
              className="object-contain absolute -bottom-px z-0 max-w-full aspect-[2.16] h-[448px] right-[129px] w-[966px]"
            />
            <div className="flex z-0 flex-col items-center self-center max-w-full w-[485px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4e48e819962a75fd1185c20f7fc24e29f538268615407d8485164c1bb0f17?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                className="object-contain aspect-[1.32] w-[65px]"
              />
              <div className="flex flex-col justify-center mt-8 w-full text-center">
                <div className="text-4xl font-bold tracking-tighter leading-tight text-neutral-100 max-md:max-w-full">
                  Join the community
                </div>
                <div className="mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
                  Join our 400,000+ person community and contribute to a more
                  private and decentralized internet. Start for free.
                </div>
              </div>
              <div className="gap-1.5 self-stretch px-6 py-4 mt-8 text-base font-medium leading-none text-white bg-indigo-500 rounded-[36px] max-md:px-5">
                Join Discord
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-16 pb-36 w-full max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col justify-center items-center max-w-full w-[1224px]">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1224px] max-md:max-w-full">
              <div className="self-stretch my-auto text-6xl font-bold tracking-tighter leading-none bg-clip-text bg-[linear-gradient(180deg,#F6F6F7_0%,#7E808F_100%)] max-md:max-w-full max-md:text-4xl">
                Product in the news
              </div>
              <div className="gap-2.5 self-stretch px-6 py-4 my-auto text-base font-medium leading-none text-white bg-violet-600 rounded-[36px] max-md:px-5">
                Browse all news
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-16 min-h-[506px] max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col p-6 rounded-xl border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[392px] max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/440c300e97f70cbaf36e5e3dead59057cfa9bb72508388870d150cadf8a57110?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain max-w-full rounded-none aspect-[1.49] w-[342px]"
                />
                <div className="flex flex-col flex-1 mt-5 w-full max-w-[342px]">
                  <div className="flex flex-col w-full">
                    <div className="text-2xl font-bold tracking-tighter leading-8 text-neutral-100">
                      Product Mail is taking on Gmail by betting on privacy
                    </div>
                    <div className="mt-4 text-sm leading-6 text-slate-400">
                      Ramet consectetur. Est porttitor mattis pharetra sit id
                      viverra. Vivamus mauris augue pharetra cras turpis
                      faucibus elit urna.
                    </div>
                  </div>
                  <div className="mt-5 w-full border border-solid bg-slate-800 border-slate-800 min-h-[1px]" />
                  <div className="flex gap-10 justify-between items-center mt-5 w-full max-w-[344px]">
                    <div className="self-stretch my-auto text-sm leading-loose text-slate-400">
                      February 8, 2023
                    </div>
                    <div className="flex gap-0.5 justify-center items-center self-stretch my-auto text-base font-medium leading-none text-white">
                      <div className="self-stretch my-auto">Read more</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3898a79d352ff1beedd51afdcf4bd95cf844acbddef76b3a6456d14555359102?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 rounded-xl border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[392px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee2e15342e1d180794a7415e1717944759bda77ab260a0eb904f34cc0e4dcf0?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain max-w-full rounded-none aspect-[1.49] w-[342px]"
                />
                <div className="flex flex-col flex-1 mt-5 w-full max-w-[342px]">
                  <div className="flex flex-col w-full">
                    <div className="text-2xl font-bold tracking-tighter leading-8 text-neutral-100">
                      Wants You To Sign Out Of Google Workspace Forever
                    </div>
                    <div className="mt-4 text-sm leading-6 text-slate-400">
                      Est porttitor mattis pharetra sit id viverra. Vivamus
                      mauris augue pharetra cras turpis faucibus elit urna.
                    </div>
                  </div>
                  <div className="mt-5 w-full border border-solid bg-slate-800 border-slate-800 min-h-[1px]" />
                  <div className="flex gap-10 justify-between items-center mt-5 w-full max-w-[344px]">
                    <div className="self-stretch my-auto text-sm leading-loose text-slate-400">
                      February 8, 2023
                    </div>
                    <div className="flex gap-0.5 justify-center items-center self-stretch my-auto text-base font-medium leading-none text-white">
                      <div className="self-stretch my-auto">Read more</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3898a79d352ff1beedd51afdcf4bd95cf844acbddef76b3a6456d14555359102?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 rounded-xl border border-solid bg-slate-900 border-slate-800 min-w-[240px] w-[392px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/104f3301416ef7a045a927d5c11150d8a9cc5ab8d244f988808c597618661b75?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                  className="object-contain max-w-full rounded-none aspect-[1.49] w-[342px]"
                />
                <div className="flex flex-col flex-1 mt-5 w-full max-w-[342px]">
                  <div className="flex flex-col w-full">
                    <div className="text-2xl font-bold tracking-tighter leading-8 text-neutral-100">
                      The Best Email Encryption Services for 2023
                    </div>
                    <div className="mt-4 text-sm leading-6 text-slate-400">
                      Dorttitor mattis pharetra sit id viverra. Vivamus mauris
                      augue pharetra cras turpis faucibus elit urna.
                    </div>
                  </div>
                  <div className="mt-5 w-full border border-solid bg-slate-800 border-slate-800 min-h-[1px]" />
                  <div className="flex gap-10 justify-between items-center mt-5 w-full max-w-[344px]">
                    <div className="self-stretch my-auto text-sm leading-loose text-slate-400">
                      February 8, 2023
                    </div>
                    <div className="flex gap-0.5 justify-center items-center self-stretch my-auto text-base font-medium leading-none text-white">
                      <div className="self-stretch my-auto">Read more</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3898a79d352ff1beedd51afdcf4bd95cf844acbddef76b3a6456d14555359102?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
