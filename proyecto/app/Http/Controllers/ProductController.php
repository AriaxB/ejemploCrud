<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $product=Product::all();
        return $product;
    }
    public function showprod($id){
        $prod=Product::find($id);
        return $prod;
    }
    public function addProduct(Request $req){
        $prod=new Product();
        $prod->nameProduct=$req->nameProduct;
        $prod->description=$req->description;
        $prod->quantity=$req->quantity;
        $prod->price=$req->price;
        $prod->state=$req->state;
        $prod->save();
        return true;
    }
    public function updateProduct($id, Request $req){
        $prod=Product::findOrFail($id);
        $prod->nameProduct=$req->input('nameProduct');
        $prod->description=$req->input('description');
        $prod->quantity=$req->input('quantity');
        $prod->price=$req->input('price');
        $prod->state=$req->input('state');

        $prod->save();
        return $prod;
    }
    public function deleteProduct($id){
        $prod=Product::destroy($id);
        return true;
    }
}
