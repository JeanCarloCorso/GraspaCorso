<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $p = new User;
        $p->name = $request->input('nome');
        $p->cpf = $request->input('cpf');
        $p->telefone = $request->input('telefone');
        $p->endereco = $request->input('endereco');
        $p->bairro = $request->input('bairro');
        $p->cep = $request->input('cep');
        $p->email = $request->input('email');  
        $p->senha = $request->input('senha');
        $p->save();
        return ($p);
/*
        $validator = Validator::make($request->all(), [
            "nome" => "required",
            "cpf" => "required|size:11|unique:people"
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'data' => [
                    'message' => $validator->errors(),
                    'status_code' => Response::HTTP_UNPROCESSABLE_ENTITY
                ]
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $p->save();
            return new PersonResource($p);
        }
*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
