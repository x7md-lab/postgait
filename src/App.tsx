import { FormEvent, useState } from 'react'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const counties = [
  {
    value: "+966",
    label: "🇸🇦 +966",
  },
  // {
  //   value: "sveltekit",
  //   label: "SvelteKit",
  // },
  // {
  //   value: "nuxt.js",
  //   label: "Nuxt.js",
  // },
  // {
  //   value: "remix",
  //   label: "Remix",
  // },
  // {
  //   value: "astro",
  //   label: "Astro",
  // },
]

async function login(e: FormEvent<HTMLFormElement>){
  e.preventDefault();
  const theFormData = new FormData(e.currentTarget);
  const url = new URL('http://localhost:5173/api/auth')
  url.searchParams.set('username', (theFormData.get("phone")?.toString() || ""))
  url.searchParams.set('password', (theFormData.get("password")?.toString() || ""))
  const dataResp = await (await fetch(url, {method: "GET"})).json()
  console.log(dataResp);
}

function App() {
  return (
    <>
      <section className='bg-white grid lg:grid-cols-7 grid-cols-1 h-full'>
        <div className='relative w-full lg:col-span-4 bg-[#FFDDDD]'>
          <div className="grid py-2">
            <img className='col-start-1 row-start-1 w-full max-h-[400px]' src="/postgait/shine.svg" />
            <div className="col-start-1 row-start-1 flex flex-col p-6 gap-8">
              <svg className="size-24" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.5 107.005L57.5 5.99999" stroke="#4D1A2D" stroke-width="12" stroke-linecap="round"/>
                <path d="M6 57.0001L107.005 57.0001" stroke="#4D1A2D" stroke-width="12" stroke-linecap="round"/>
                <path d="M21 92.4214L92.4213 21.0002" stroke="#4D1A2D" stroke-width="12" stroke-linecap="round"/>
                <path d="M21 21.0001L92.4213 92.4213" stroke="#4D1A2D" stroke-width="12" stroke-linecap="round"/>
              </svg>
              <h1 className="font-bold text-[#4D1A2D] lg:text-6xl text-4xl">
              <span className='lg:text-5xl text-3xl'>Hello<br/></span>
              Troxo!
              </h1>
              <span className="font-medium text-[#4D1A2D] text-lg">
                Easily manage your shipments with Postgate for a practical shipping solution.
              </span>
            </div>
            <img className='w-full absolute bottom-0' src="/postgait/delivery5.svg" />
          </div>
        </div>
        <div className="lg:col-span-3 lg:order-none order-first w-full flex flex-col items-center p-5">
          <form onSubmit={(e)=> login(e)} className="my-7 flex flex-col gap-8 items-center text-[#48505E]">
          <img className="my-4" src="/postgait/logo.svg" />
              <div className="text-center px-16 mix-w-[85px]">
              <h2 className="font-bold text-2xl text-black">Log in to your account</h2>
              <br />
              <span className="font-light text-sm">
                Please provide your mobile number and verification code to access your account.
              </span>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 px-8">
              <Label htmlFor="phone">Mobile Number</Label>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div style={{pointerEvents: "none"}}><ComboboxDemo /></div>
                <Input type="tel" id="phone" name="phone" placeholder="5x xxx xxxx" />
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 px-8">
              <Label htmlFor="password">Password</Label>
              <Input type="text" id="password" name="password" placeholder="Enter your Password" />
            </div>
            <div className="w-full max-w-sm px-8 text-center">
              <Button className="p-4 w-full bg-[#FFDDDD] hover:bg-yellow-50 text-[#4D1A2D]" type="submit">Sign in</Button>
              <span className="font-light text-xs">If you encounter any problems, <a href="#" className="text-[#4D1A2D]">please contact us.</a></span>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between text-xs px-1"
        >
          {value
            ? <span><span className='emoji'>{counties.find((country) => country.value === value)?.label.split(" ")[0]}</span> 
              <span>{counties.find((country) => country.value === value)?.label.split(" ")[1]}</span>
            </span>
            : <span className='flex flex-row mx-2'><img className='size-4' src="https://em-content.zobj.net/source/apple/391/flag-saudi-arabia_1f1f8-1f1e6.png" /> +966</span>}
         <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24">
         <path fill="currentColor" d="m7 10l5 5l5-5z"/>
         </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {counties.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {/* <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default App
