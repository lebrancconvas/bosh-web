// List of Project from Bangkok Open Source Hackathon 

import { createSignal, For } from 'solid-js';

const [projects, setProjects] = createSignal([
  {
    "name": "rachgitja.md"
  },
  {
    "name": "Bank for the poor"
  },
  {
    "name": "OpenStreetMap Contribution"
  },
  {
    "name": "politician track"
  }
]);

export default function Project() {
  return (
    <div class="flex h-screen justify-center">
      <h1 class="text-3xl font-thin">Project</h1>
      <br />
      <For each={projects()}>
        {
          (project, index) => {
            return (
              <div>
                <h1 class="text-2xl font-thin">{index() + 1}: {project.name}</h1>
              </div>
            )
          }
        }
      </For>  
    </div>
  )
}