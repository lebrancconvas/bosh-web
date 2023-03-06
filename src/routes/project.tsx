// List of Project from Bangkok Open Source Hackathon 

import { createSignal, For } from 'solid-js';
import { Title } from 'solid-start'; 

const [projects, setProjects] = createSignal([
  {
    "name": "rachgitja.md",
    "description": "แปลราชกิจจานุเบกษา"
  },
  {
    "name": "Fill you in the blank",
    "description": ""
  },
  {
    "name": "policytracka",
    "description": ""
  },
  {
    "name": "smart-traffic-lights",
    "description": ""
  },
  {
    "name": "Bank for the poor",
    "description": ""
  },
  {
    "name": "Green Population",
    "description": ""
  }
  ,
  {
    "name": "bkkchangelog",
    "description": ""
  }
]);

export default function Project() {
  return (
    <>
      <Title>Project | Bangkok Open Source Hackathon</Title>
      <div class="flex h-screen justify-center">
        <h1 class="text-3xl font-thin">Project</h1>
        <br />
        <For each={projects()}>
          {
            (project, index) => {
              return (
                <div class="grid grid-flow-col auto-cols-auto">
                  <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="w-full h-48 object-cover" src="https://via.placeholder.com/500x300.png" alt="Card Image" />
                    <div class="p-4">
                      <h3 class="font-medium text-gray-600 text-lg">{project.name}</h3>
                      <p class="mt-2 text-gray-500">{project.description}</p>
                      <a class="mt-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-medium" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              )
            }
          }
        </For>  
      </div>
    </>
  )
}