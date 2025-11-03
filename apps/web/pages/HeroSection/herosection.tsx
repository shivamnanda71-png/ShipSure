"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 ">
        <div className="absolute top-0 h-40 w-px bg-linear-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 ">
        <div className="absolute h-40 w-px bg-linear-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 ">
        <div className="absolute mx-auto h-px w-40 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"New Way of Modern Delivery".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Our company uses modern A.I. powerful technology to deliver parcel
          anytime and anywhere.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl bg-neutral-100 p-4 shadow-md"
        >
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="image.png"
              alt="Landing page preview"
              className="aspect-video h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>

        <div>
          <h3 className="text-center mt-10 text-2xl font-semibold">
            Trusted by Industry Leaders
          </h3>

          <div className="flex flex-row items-center justify-evenly">
            <img
              className="w-30 h-auto object-cover aspect-auto"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABSlBMVEX///8AAAD8/Pz5+fkEBAT29vbQ0NCioqIdHR2Tk5P09PQ2NjZBQUGsrKyQkJCMjIyysrIqKirb29t9fX3/mQDk5OTq6ur//P8xMTH///s8PDwZGRnu7u67u7v6///T09NwcHBnZ2fAwMBSUlL7mQARERGampqAgIAjIyPxmAD///JpaWlKSkpbW1v/kwCkpKT/++P//+z/9//0//vwnQAMCBkjHyskGx8NAAkiHxlwa2Tz7+Xl5NvLzcaZn5phaWT//dz+9sfx4abw043jvm3gtVznrEDltk378NLv//HkoinxwWjVq23orFP92ovp///ryIrmlBvGl0znmAzcnTbpvXD88MPukxPxr1b02Z35yYfgnkbhyIvjngD44bn/+dLVsFvbsS3yt1f+8NntymTs2qTp7K3dvVrt2oDnpz/0u0TvrSvMrTf0tmdr1GI0AAAN60lEQVR4nO1b/VsaSRKe6WZQQRSRAQdhQCAooyAE7jO7d4gfSfCySY5oYm6jt2Zzd+5e/v9fr6o/5gM1xjV5yPnU+7hxZrqnu96q6qrqHtcwCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAI3xIYMzjnbNpifEUwzjj8AxfTluRrAewXX0yhKe8rmNEwTbOQuMc2tFbNWMxM31+GzJpFhqV7zNCYAS+dt+4zQyPeSFvTFuNr4x5HUgHg97kMmUDoTiqHMd0A6VVeMZlo9eAsokQWmlK85bdeKQoL5p58GGn1LcUjHcVkWgjVj00MEvS2LHiYKFdLpWqGCT5cPOdcdeAclrSVy0EDlkrYzoq2hbMGowgJmF2tlqrxhFKLbLp6uUjxpDKKdkIOYWg2moeFw8DMavzQbEp3FpMSYjMrFg1DSR+ZihnFmZqp0EonDC6mB17bC3NzcwtlGKDUwsbNuLChUV6exVA2kwjriVmlygM1SqFhG/5MmfXlSaQUfehiN8Tcq5VSEBl5rjGHyAGTNDbH1qpRY7NiKZ2ykSKvNholVIYQcbUSnzCioDJnhpFUfZgRV+IaxTXd2ECP8Psvxf1hmFEtRIZp+BItmpdhSxsaiVBjsuoLNyOfLBjMn7nCI+6MNc0sXiWW4KrIbN9GlWgOAevmWpPTpzmLMlwL2kD766Gucaa9JKomOdO1DB9kxEssNx95vMCV+zXk/WJ45krENDjdLPYVDBP2ClQAMRPLALNlRcydKG6ZsUkB4hEbbqX9HvA7Vw33LCSknpDG5DALn2Boi7WUWwq/BJfrhnRtxXAuJURWSF/PMFfTAyHPhbBHc2NdkjfDM9UiDJOFgGHMrGxFOqd114lB8JXMtQxjaENmFaJvwfW29DDlpctLQYeYOX8twwcNaF5J5RLxGr6A+guQ0WO3GtuLvkqLIvjGQ1OHZInFlK6EEJJhQT0vLM40/BUxI4PiQohDTA6HpudCSny0urle0y5gB+swZm6Y4alQY+wqhrHYKkRBsSh4BV9pTOpC2AJ72/OKUEmEWM0QtLJVwF+a6cZ8TDOuiXUYV/3W0WktvVA3pUC5ajUlkPZ9SZTM9oayDUjOq2qEzYChnLAlycfEW1fbENtallS1uK2F16Fa6nOgblhNJSVbKmrDSo5b1VXfnikrUawoYee5ryeQ1cKagBVV15pMylzH5ozWy3KERhzjnR4iZoeaYmYSgm55Vt3MhAq16Do0Z22d/sUSDqUxQ62qHGYBWPqKw0KE4UoRZZzRjiR2ZVZSthWE7raVIwgm3FB+mrR0dSQe83kUE342ZHhSU2/JPraarBEmP1tER08FUl29DmNgId0UF+EwZEOeiZca69sWFzVIcVZOsygynGa4KF7PqLukVFAlxJBzO15NLa4XuWS4pjRjRVLYujKFGY+MtyhbjRXJo8ZZwFDKkVM9l69jiEtUN9nSLYJ5La4ULHpczVBupYsb8m5NvqkiZEGQsmTu0060qRmGnMWoas9bkP30iigpBaxJQ63m1O4Pb6qy+tzQDANE1+F84L/WAzOyYmXhh625TDy1sBm7iqHUOU9G5lERUqxDUamKwtESLrHke2lgwaJ63axZsp7TIbasdLPgz+ZnixiyhZ+VT9sQUljAkK2akdTJDAvL6lJlSZeUVzCULsCSIa/yg/C8qj45sIkvzq+GR0n6NTBwWtZxtKyeVfzRJWZCHqOuV0VBbhiFm2w4F2I0wRCXXy5chl3N0AgxXLhsQ+EdKaWjIIcHDDkr6WSY0pF1LZIBDRlPTMyiPtsllQJuZJi6niHW5PhooiK5yobaS+euZGhvXR4lZEN7VaXTFlfx1ahFGDKf4eJlhtH1cYmh+WmGMhSjbLPzrbUH19uQX29DJrJ3TNa+ydqmXoeSISZaSSeI45cYGtczNO7EUFdtMbNVyiVY8TcytApqlI3tjOVnC58hSKysq6cG2fSWZpLhXMBw40sw1DuLBoPag1+dLW5kaDSUiWpFsUGfYIhqlA5cCUXDtcjoTFcN4XX4JRiW1dQyyYVtyG7BMKHC+UZRmkyZZ0XWa8wSa9TE5BkqAXRwjSuGOpaWgusvwXBOMazKW1063ZJhWXWsKGFVPaaqNpVYINIoMnKbq71SS6MjevmWNlz5NEO901EBQO9u12/HMKVyREoR2NACCoJq4wGLtLK8OFO1mdwEBTWhhFLLUvF2DK0bGOpCQxUPuq7YEod3n81wTjmcZOib1CyKcmnJjGJ+LieKnCU9l4ClFojYPn1BhmoBmVUmcr9fkthYWX02w4apt8PiKHJNj5LG8420eRnLwB0Woh4eXxLdwNDVWzK82UulbC3UKm/5BYkoAW/hpfK9WXGEFjrWQU+4XDGJXbh2kZiMcno7LCr5L8lQygmqWy7b1VaoKMHq/LMZxrXk83E7Ez6TqkAK0vVnQBCnQ2u3NMV4ppRU+UbK9gUZhk6QHvgnMEKX1i0Y6mwhR1E6EwJnsMKORY/hJENmBGkyeK62ZtcztBpri0V2C4bGfGh2mGFlKagAbpXxw4LCU+38VrCHMH/3+z/8UV8vi8JtO3IEidMXWfis7QqGONqWdRuGGTOMZEbFwdKt1iG3asEY4iBHHv8so7wo05/+3PjezhUffffd93/564ZmyCOagReTGfUp4FqGXFi6fAuG3KhumLoqNjdzspxYLUfyYVkolitXVPkrssc3iqGD8xUIhxn01oYYZcGspR95juf1EJ7nPUrXxJELDMrTs2bgxBX/nFMzVCdKwQ6YiwNGWyp4FT/sWBM1DX8wwZgbuXU1wVqV4zechlkQMzFmS90lleuo6F6ValbFQUUezTCeVpu4wjbsqTkrC0Xi+UEiw5nbc10XfgGMfB42U+qvKCBB+efFtbj/LYdVY+HBtTbxBBCnnYGX8QykJb5O4ZFJ6FyGo67LIYZYQVnlUlp8EuNCOFue3YDUCSuRSFjqOxkMZoEGErLm4kYCbqwEV6dpDL+spUvxnPhrJVBUwsaHmB/hxzUcr9vpdAaDjmfkuf5sKGbn1ZnF9UbJZsHXKngbprL8ozq4xLnFPHYpY1ioODk3QymtMCHLSoTPh5g+pjH8T6LiyMV1UOfQ6DLm+MeBXPUz9Bc8Jr/WiTF8A4gzU/kZDhtclzmDneHu3v7+wcHjvd3hwDFcNenEt1kWXPr/qt+h7uLcU3+QlRoMfTLEidnNfxDmOk8GT928Azxdx7mp9yeAI3iD4eGoWW9n6/Vstt5sHnbdnpO/07B3B3v/t2c/nD3P5zFAPL/DQMClMzwfZ9sAxbD/qpOfPkNv8OJl/XwHHQyC3x0Gcnve8d9fNvu/Hjx+vL8/Gjfr9earAfO8aTN0vMHbZn18NOz0XM7v8Hc5zHG6T453dgaDLkSawfC8mc1eAMOp29Dt9Tq743a7eXjahQD/2yGCVe+56+YfAnrOSbOdfdZh0/fSfJ67T4cH4FOv35wM7kTRcJAj5Ir3XS/vnTSz30akAe+CeNrZG0EEfH3x9tgDG3DPgcjv5PN5F0zM8ghHyOko9OA/D3oxvMFmuPAcyDpG9/jtm3/8OPCc3Wb73SnEV8eYNkOJs12I8vVs/eXhyVkXyxIReRyD5ZkswjRD7AyPBW1RuUCOgI5Ojz3MO92d4d5BM9v/58BjR/Xs6P2UWYXBveP9cb3ebzabo73TThcMAg4G5nn40HFkDWYYgTWEWcFwgmH3aa8HxZrXgWQIK7r+7qchdzujdv2oO0VGkwAjdXYvmpDI6u3265fnu8edp/AYaLqKDd5phphYBITLAnuv+/7054NxE7Phqxc7zkP3tN/un94l+3xpdD3wtuO3r1+3s80+EG2Ozg8/HJ91wEOfy30CmNJwFEVYnWA1YUEg23nyYfd8NJZZfnx+yuGhc1Svnz/6lhh6Hlan3X/9u1/HYgSEzbbfjQ4OX5w+QXaG63U9JwDWsJ7X7Q6Ohyc//jJ612/WwXzZ5ruD/+x4bq/bffJrdvyBfUsMYaMDgvN893T/ZV2g2cfiC4rL8ej8h5Ph2fsQRa8zOD7+8OPR+cVYxCekh31HexCLIawa+dN37V+6vW8iiEYBS6oz3B/1sXjut+vosFlkKdF/9ytiDICQVBfcsA9YvJ1t9y9ePPF64MsQfjtvmj9hJThtPpeAOa3XPTt9e9FH22RFBQ3eJ66EPfv9PlJqiyd97CWa6xicdjoMEyQG5vejVyceLMdpE7oEp+O5zyGyeE9O9sdNtA0IL8nVNU1EVuyNkJ8KLxd7wzPMoqIwgCzy3X8/QLlwp0r+68DpOjKFo7P+/Hj0uq58VDFsi72R2B0ha7iq98fjZ4cnOx2ZNJmIthCFdryH4BD5aRO6jJ4rqzFIjyzfOT45hDBZl4FEclSWRLb4bHyx/wLrA9zKY0LBsGvgdhy9vZv/Bhm6hiw0HcweYIrO2c7J0eEF7Pb60iel8WBBjkfPnu3tDs86jjx2kjFWlnZQIDyEEhzMOm0+V8KRp2R59FjI9mjUzvFwuHv08eMbgY8fPx7tngyPB6K0c3tPIT06QiV+VYev9/JT31TcFuIMbdDBmlVK/n8m/00QTigrUe2T94whrlFxYOjqjcY9hnOP/ycd1zXup38KOJqba9xXJ3X09vDeL0MCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCDcF/wP4B93eWsYeXIAAAAASUVORK5CYII="
              alt="amazon"
            />
            <img
              className="w-30 h-auto object-cover aspect-auto"
              src="data:image/png;base64,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"
              alt="shopify"
            />
            <img
              className="w-30 h-auto object-cover aspect-auto"
              src="https://cdnmp.plentymarkets.com/22204/meta/images/icon_plugin_sm.png"
              alt="woocom"
            />
            <img
              className="w-30 h-auto object-cover aspect-auto"
              src="https://images.ctfassets.net/drk57q8lctrm/4QgGDTtQYDx6oDaW3aU7KS/34163f3bef6d82fd354a7455d07102eb/flipkart-logo.webp"
              alt="flipkart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
