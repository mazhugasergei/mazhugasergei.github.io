import CodeBlock from "@/components/code-block"
import Image from "@/components/image"
import Link from "@/components/link"
import Post from "@/components/post"
import Video from "@/components/video"
import testImage from "@/public/test.jpg"

export default function Page() {
  return (
    <main>
      <Post title="Test Page" subtitle="June 2024">
        <section id="">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <Link href="#">Soluta</Link> dolores, non
            consectetur beatae ea iure placeat sapiente consequatur, minus, sed quisquam architecto quibusdam odit sequi
            cumque doloribus tempore corporis modi laborum perspiciatis repudiandae qui. Vel temporibus provident et
            ducimus commodi error, suscipit, laboriosam vero fuga sequi soluta illo culpa, eum possimus aut aliquam
            officiis beatae magnam totam? Ducimus quaerat sequi iusto vitae, aliquam fuga quibusdam, tempore culpa autem
            est aspernatur eveniet doloremque illo provident in? Magni autem minus hic dolor?
          </p>
          <CodeBlock
            code={`import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))`}
            language="javascript"
          />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolorum quae velit! Veritatis maiores iure
            consequatur, adipisci quidem quae odit nesciunt cum expedita voluptate culpa earum non magnam fugiat veniam.
          </p>

          <Video src="/test.mp4" />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nisi ducimus neque quisquam tempore,
            suscipit libero pariatur doloribus cupiditate laborum. Libero culpa aperiam ut repudiandae reiciendis nemo
            ipsa non minus.
          </p>

          <Image src={testImage} alt="test" />
        </section>

        <section id="lorem-ipsum-2">
          <h2>Lorem Ipsum 2</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <Link href="#">Soluta</Link> dolores, non
            consectetur beatae ea iure placeat sapiente consequatur, minus, sed quisquam architecto quibusdam odit sequi
            cumque doloribus tempore corporis modi laborum perspiciatis repudiandae qui. Vel temporibus provident et
            ducimus commodi error, suscipit, laboriosam vero fuga sequi soluta illo culpa, eum possimus aut aliquam
            officiis beatae magnam totam? cucimus quaerat sequi iusto vitae, aliquam fuga quibusdam, tempore culpa autem
            est aspernatur eveniet doloremque illo provident in? Magni autem minus hic dolor?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolorum quae velit! Veritatis maiores iure
            consequatur, adipisci quidem quae odit nesciunt cum expedita voluptate culpa earum non magnam fugiat veniam.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nisi ducimus neque quisquam tempore,
            suscipit libero pariatur doloribus cupiditate laborum. Libero culpa aperiam ut repudiandae reiciendis nemo
            ipsa non minus.
          </p>
        </section>
      </Post>
    </main>
  )
}
