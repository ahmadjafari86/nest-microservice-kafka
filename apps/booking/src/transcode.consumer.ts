import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);
  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcode start for job id: ${job.id}`);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 4000));
    this.logger.debug('Data:', job.data);
    this.logger.log(`Transcode complete for job id: ${job.id}`);
  }
}
