import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeUpload from "./ResumeUpload";
import JobDescription from "./JobDescription";

function CreateinterviewDialog() {
  const [formData, setFormData] = useState<any>({});

  const [file,setFile]=useState<File>();
  const [loading,setLoading]=useState(false);
  const onHandleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  }

  const onSubmit=async()=>{
    if(!file) return;
    setLoading(true);
    const formData=new FormData();
    formData.append('file',file);
    try{
      const res=await axios.post('api/generate-interview-questions',formData)
      console.log(res.data);
    }catch(e){
      console.log(e);
    }finally{
      setLoading(false);
    }

  }

  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button>Create Interview</Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="min-w-3xl">
        <DialogHeader>
          <DialogTitle>Please submit the following details.</DialogTitle>

          {/* Use a div instead of DialogDescription for complex content */}
          <div className="mt-5 w-full">
            <Tabs defaultValue="resume-upload" className="w-full">
              <TabsList>
                <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                <TabsTrigger value="job-description">Job Description</TabsTrigger>
              </TabsList>

              <TabsContent value="resume-upload">
                <ResumeUpload setFiles={(file:File)=>setFile(file)}/>
              </TabsContent>

              <TabsContent value="job-description">
                <JobDescription onHandleInputChange={onHandleInputChange} />
              </TabsContent>
            </Tabs>
          </div>
        </DialogHeader>

        {/* Dialog Footer with buttons */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>

          <Button onClick={onSubmit} disabled={loading || !file}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateinterviewDialog;
