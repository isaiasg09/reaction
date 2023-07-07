function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800 min-h-screen text-zinc-900 p-8">
      <div className="bg-white xl:w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-md border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] w-[80vw]">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-violet ">
            <h2>Introduction</h2>
            <p>
              In the ever-evolving landscape of web development, front-end
              frameworks play a crucial role in simplifying the design and
              development process. Among these frameworks, Tailwind CSS has
              emerged as a popular choice for developers seeking a flexible and
              efficient way to create modern, responsive, and intuitive user
              interfaces. In this blog post, we will delve into the world of
              Tailwind CSS, exploring its key features, advantages, and why it
              has gained such popularity among developers.
            </p>

            <h4>
              You can learn more about this at{" "}
              <a href="https://rocketseat.com.br" target="_blank">
                Rocketseat
              </a>
            </h4>

            <h2>Understanding Tailwind CSS</h2>
            <p>
              Tailwind CSS is a utility-first CSS framework that provides
              developers with a comprehensive set of utility classes, allowing
              them to build interfaces quickly. Unlike traditional frameworks
              that focus on pre-defined components, Tailwind CSS takes a
              different approach. It provides an extensive range of utility
              classes that can be combined to create custom designs, without the
              need to write custom CSS. This utility-first approach gives
              developers unparalleled control and flexibility over their
              designs.
            </p>

            <h2>Key Features and Advantages</h2>
            <ol>
              <li>
                <strong>Easy to Learn:</strong> Tailwind CSS has a shallow
                learning curve, making it accessible to both beginners and
                experienced developers. Its utility classes are straightforward
                and intuitive, using intuitive names that reflect their purpose.
                This allows developers to quickly grasp and utilize the
                framework effectively.
              </li>
              <li>
                <strong>Rapid Prototyping:</strong> With Tailwind CSS, you can
                rapidly prototype your designs. The framework's utility classes
                allow you to apply styling to elements directly in your HTML
                markup, eliminating the need to switch between CSS and HTML
                files. This streamlined workflow enables faster development
                iterations and encourages experimentation.
              </li>
              <li>
                <strong>Customization:</strong> Tailwind CSS offers extensive
                customization options. You can generate a configuration file
                that allows you to tailor the framework to your project's
                specific needs. From defining color palettes to adding new
                utility classes, the framework is highly adaptable and can be
                fine-tuned to match your design system perfectly.
              </li>
              <li>
                <strong>Responsive Design Made Easy:</strong> Building
                responsive designs is seamless with Tailwind CSS. The framework
                provides a range of responsive utility classes that let you
                control the layout, sizing, and visibility of elements across
                different screen sizes. This makes it simple to create
                interfaces that adapt seamlessly to various devices and screen
                resolutions.
              </li>
              <li>
                <strong>Performance:</strong> Tailwind CSS focuses on
                performance optimization. Rather than relying on a complex
                hierarchy of selectors, it generates small and optimized CSS
                files by purging unused styles. This approach helps reduce the
                overall file size and leads to improved loading times for your
                web pages.
              </li>
              <li>
                <strong>Community and Ecosystem:</strong> Tailwind CSS has a
                thriving community of developers contributing to its growth. The
                official documentation is comprehensive and well-maintained,
                offering in-depth explanations and examples. Additionally, an
                ecosystem of plugins and extensions has emerged, providing
                additional functionality and integrations with popular
                frameworks and tools.
              </li>
            </ol>

            <h2>Code Examples</h2>
            <p>
              Here are a few code examples showcasing the usage of Tailwind CSS
              utility classes:
            </p>

            <pre>
              <code>
                &lt;div class="bg-blue-500 text-white px-4 py-2 rounded"&gt;
                Hello, Tailwind CSS! &lt;/div&gt;
              </code>
            </pre>

            <pre>
              <code>
                &lt;button class="bg-red-600 hover:bg-red-700 text-white
                font-bold py-2 px-4 rounded"&gt; Click me &lt;/button&gt;
              </code>
            </pre>

            <h2>Blockquote</h2>
            <blockquote>
              <p>
                "Tailwind CSS has revolutionized the way developers approach
                styling and design in web development."
              </p>
              <cite>- John Doe, Web Developer</cite>
            </blockquote>

            <h2>Conclusion</h2>
            <p>
              Tailwind CSS has revolutionized the way developers approach
              styling and design in web development. Its utility-first approach,
              customization options, and emphasis on rapid prototyping have made
              it a favorite among developers seeking efficiency and flexibility.
              By leveraging the power of Tailwind CSS, developers can focus more
              on the functionality and user experience of their applications
              while maintaining clean, scalable, and maintainable code. Whether
              you're a beginner or an experienced developer, exploring Tailwind
              CSS will undoubtedly unlock new possibilities and streamline your
              front-end development workflow.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
