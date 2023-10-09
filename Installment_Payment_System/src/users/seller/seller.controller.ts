import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Seller } from './models/seller.model';
import { SellerGuard } from '../../guards/seller.guard';

@ApiTags('sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @ApiOperation({ summary: 'Create a new seller' })
  @ApiResponse({ status: 201, type: Seller })
  @Post('register')
  create(@Body() createSellerDto: CreateSellerDto) {
    return this.sellerService.registration(createSellerDto);
  }

  @ApiOperation({ summary: 'Activate seller account' })
  @ApiResponse({ status: 200, type: Seller })
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.sellerService.activate(link);
  }

  @ApiOperation({ summary: 'Login as a seller' })
  @ApiResponse({ status: 200, type: Seller })
  @Post('login')
  login(@Body() loginSellerDto: LoginSellerDto) {
    return this.sellerService.login(loginSellerDto);
  }

  @ApiOperation({ summary: 'Logout as a seller' })
  @ApiResponse({ status: 200, type: Seller })
  @UseGuards(SellerGuard)
  @Post('logout')
  logout(@Body('refreshToken') refreshToken: string) {
    return this.sellerService.logout(refreshToken);
  }

  @ApiOperation({ summary: 'Refresh seller token' })
  @ApiResponse({ status: 200, type: Seller })
  @Post('refresh-token')
  refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.sellerService.refreshToken(refreshToken);
  }

  @ApiOperation({ summary: 'Find sellers with filtering options' })
  @ApiResponse({ status: 200, type: [Seller] })
  @UseGuards(SellerGuard)
  @Get()
  findFilteredSellers(@Query() findFilteredSellersDto: FindFilteredSellersDto) {
    return this.sellerService.findFilteredSellers(findFilteredSellersDto);
  }

  @ApiOperation({ summary: 'Find seller by ID' })
  @ApiResponse({ status: 200, type: Seller })
  @UseGuards(SellerGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sellerService.findOneById(id);
  }

  @ApiOperation({ summary: 'Delete seller by ID' })
  @ApiResponse({ status: 200 })
  @UseGuards(SellerGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sellerService.deleteSellerById(id);
  }

  @ApiOperation({ summary: 'Update seller by ID' })
  @ApiResponse({ status: 200, type: Seller })
  @UseGuards(SellerGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellerService.updateSellerById(updateSellerDto, id);
  }
}
