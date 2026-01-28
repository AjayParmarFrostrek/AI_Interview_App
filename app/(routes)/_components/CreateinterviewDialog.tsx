import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeUpload from './ResumeUpload'
import JobDescription from './JobDescription'

function CreateinterviewDialog() {
  return (
        <Dialog>
  <DialogTrigger>
    <Button>Create Interview</Button>
  </DialogTrigger>
  <DialogContent className='nin-w-3xl'>
    <DialogHeader>
      <DialogTitle>Please submit following details.</DialogTitle>
      <DialogDescription>
         <Tabs defaultValue="resume-upload" className="w-full mt-5">
  <TabsList>
    <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
    <TabsTrigger value="job-description">Job Description</TabsTrigger>
  </TabsList>
  <TabsContent value="resume-upload"><ResumeUpload/></TabsContent>
  <TabsContent value="job-description"><JobDescription/></TabsContent>
</Tabs>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose className='flex gap-6'>
            <Button variant={'ghost'}>Cancel</Button>
        </DialogClose>
        <Button>Submit</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default CreateinterviewDialog