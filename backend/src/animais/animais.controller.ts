import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AnimaisService } from './animais.service';
import { CreateAnimaiDto } from './dto/create-animai.dto';
import { UpdateAnimaiDto } from './dto/update-animai.dto';

@Controller('animais')
@ApiTags('Animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post('criar')
  @ApiOperation({summary: 'Criar Um Animal'})
  create(@Body() createAnimaiDto: CreateAnimaiDto) {
    return this.animaisService.create(createAnimaiDto);
  }

  @Get('listar-todos')
  @ApiOperation({ summary: 'Listar Todos Os Animais'})
  findAll() {
    return this.animaisService.findAll();
  }

  @Get('buscar/:id')
  @ApiOperation({ summary: 'Buscar Um Animal Pela Id'})
  findOne(@Param('id') id: string) {
    return this.animaisService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({ summary: 'Atualizar Um Animal Pela Id'})
  update(@Param('id') id: string, @Body() updateAnimaiDto: UpdateAnimaiDto) {
    return this.animaisService.update(+id, updateAnimaiDto);
  }

  @Delete('remover/:id')
  @ApiOperation({ summary: 'Remover/Deletar Um Animal Pela Id'})
  remove(@Param('id') id: string) {
    return this.animaisService.remove(+id);
  }
}
