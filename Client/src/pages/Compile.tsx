import React from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import CodeEditor from '@/components/CodeEditor';
import HelperHeader from '@/components/HelperHeader';
 

const Compile: React.FC = () => {
  
  return (
    <div className="h-[calc(100vh-60px)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full   border"
      >
        <ResizablePanel className="min-w-350px h-[calc(100vh-60px)]"defaultSize={50}>
           <HelperHeader/>
           <CodeEditor/>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="min-w-350px h-[calc(100vh-60px)]" defaultSize={50}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod itaque, quae a, illo nesciunt facere cumque cum et, laudantium
            dolore rerum fugiat harum ipsum distinctio atque veniam. Perferendis, hic tempore.
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compile;
