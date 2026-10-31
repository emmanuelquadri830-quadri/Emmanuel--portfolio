import Image from 'next/image'

type Shot = { src: string; alt: string; width: number; height: number }

const rgba = (hex: string, alpha: number) => {
  const n = hex.replace('#', '')
  const v = n.length === 3
    ? n
        .split('')
        .map((c) => c + c)
        .join('')
    : n
  const r = parseInt(v.slice(0, 2), 16)
  const g = parseInt(v.slice(2, 4), 16)
  const b = parseInt(v.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function PhoneBody({ shot, mirrored = false }: { shot: Shot; mirrored?: boolean }) {
  return (
    <div className="rounded-[26px] border border-white/15 bg-[#08080A] p-[7px] shadow-[0_35px_70px_rgba(0,0,0,0.55)] ring-1 ring-black/60 sm:rounded-[34px] sm:p-[9px]">
      <div className="overflow-hidden rounded-[19px] bg-white sm:rounded-[25px]">
        <Image
          src={shot.src}
          alt={mirrored ? '' : shot.alt}
          aria-hidden={mirrored || undefined}
          width={shot.width}
          height={shot.height}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}

export function DualPhoneHero({
  left,
  right,
  glow = '#7C3AED',
}: {
  left: Shot
  right: Shot
  glow?: string
}) {
  return (
    <section className="flex justify-center py-16 sm:py-24 lg:py-28">
      <div className="relative w-full max-w-[1080px] overflow-hidden rounded-[28px] border border-black/10 bg-[#0A0612] shadow-[0_45px_120px_-35px_rgba(10,6,18,0.5)] sm:rounded-[44px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(55% 48% at 50% 70%, ${rgba(glow, 0.4)} 0%, transparent 72%), radial-gradient(90% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%), linear-gradient(180deg, #0D0817 0%, #0A0612 55%, #07040D 100%)`,
          }}
        />

        <div className="relative flex items-end justify-center px-6 pb-16 pt-14 sm:px-12 sm:pb-24 sm:pt-20">
          <div className="relative z-20 w-[200px] -translate-y-1 -rotate-[6deg] sm:w-[264px] lg:w-[336px]">
            <PhoneBody shot={left} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-full w-full opacity-25 blur-[1px] [transform:scaleY(-1)]"
            >
              <PhoneBody shot={left} mirrored />
            </div>
          </div>

          <div className="relative z-10 -ml-9 w-[168px] -translate-y-5 rotate-[7deg] sm:-ml-14 sm:w-[222px] sm:-translate-y-8 lg:-ml-20 lg:w-[280px]">
            <PhoneBody shot={right} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-full w-full opacity-25 blur-[1px] [transform:scaleY(-1)]"
            >
              <PhoneBody shot={right} mirrored />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07040D] via-[#07040D]/70 to-transparent sm:h-24"
        />
      </div>
    </section>
  )
}
