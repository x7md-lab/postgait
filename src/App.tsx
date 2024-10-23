import { useState } from 'react'
//@ts-expect-error
import { Input } from "@/components/ui/input"
//@ts-expect-error
import { Label } from "@/components/ui/label"
//@ts-expect-error
import { Button } from "@/components/ui/button"
//@ts-expect-error
import { cn } from "@/lib/utils"
//@ts-ignore
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
//@ts-ignore
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

function App() {
  return (
    <>
      <section className='bg-white grid lg:grid-cols-7 grid-cols-1  h-full'>
        <div className='w-full lg:col-span-4 bg-[#FC746C]'>
          <div className="grid">
            <img className='col-start-1 row-start-1 w-full max-h-[400px]' src="/postgait/shine.svg" />
            <div className="col-start-1 row-start-1 flex flex-col p-8 gap-12">
              <svg className="size-24" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.5 107.005L57.5 5.99999" stroke="white" stroke-width="12" stroke-linecap="round"/>
                <path d="M6 57.0001L107.005 57.0001" stroke="white" stroke-width="12" stroke-linecap="round"/>
                <path d="M21 92.4214L92.4213 21.0002" stroke="white" stroke-width="12" stroke-linecap="round"/>
                <path d="M21 21.0001L92.4213 92.4213" stroke="white" stroke-width="12" stroke-linecap="round"/>
              </svg>
              <h1 className="font-bold text-white lg:text-8xl text-5xl">
              Hello<br/>
              Postgait!
              </h1>
              <span className="font-medium text-white text-xl">
                Easily manage your shipments with Postgate for a practical shipping solution.
              </span>
            </div>
           
          </div>
        </div>
        <div className="lg:col-span-3 lg:order-none order-first w-full flex flex-col items-center p-5">
          <form className="my-7 flex flex-col gap-8 items-center text-[#48505E]">
          <img className="my-4" src="/postgait/logo.svg" />
              <div className="text-center px-16 mix-w-[85px]">
              <h2 className="font-bold text-2xl text-black">Log in to your account</h2>
              <br />
              <span className="font-light text-sm">
                Please provide your mobile number and verification code to access your account.
              </span>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 px-8">
              <Label htmlFor="verification">Verification</Label>
              <Input type="text" id="verification" placeholder="Enter your verification" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 px-8">
              <Label htmlFor="phone">Mobile Number</Label>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <ComboboxDemo />
                <Input type="text" id="phone" placeholder="5x xxx xxxx" />
              </div>
            </div>
            <div className="w-full max-w-sm px-8 text-center">
              <Button className="p-4 w-full bg-[#FC746C] hover:bg-slate-400" type="submit">Sign in</Button>
              <span className="font-light text-xs">If you encounter any problems, <a href="#" className="text-[#FC746C]">please contact us.</a></span>
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
          className="justify-between text-xs"
        >
          {value
            ? <span><span className='emoji'>{counties.find((country) => country.value === value)?.label.split(" ")[0]}</span> 
              <span>{counties.find((country) => country.value === value)?.label.split(" ")[1]}</span>
            </span>
            : "🏳️"}
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
