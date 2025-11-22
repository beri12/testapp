// app/page.tsx
import ScrollCard from   "./components/ScrollCards"

export default function Home() {
  return (
    <main className=" items-center justify-center"  >

  <h2 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold text-[#8e8b82] tracking-tighter leading-[0.9] text-center">
                    What we ship.
                </h2>
              <h3 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold text-black tracking-tighter leading-[0.9] text-center">
    Our ways to move fast
</h3>
      
          <ScrollCard />
    </main>
    
  
    
 
  );
}
